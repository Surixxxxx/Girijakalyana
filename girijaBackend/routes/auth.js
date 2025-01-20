const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';

// Register a user
router.post('/auth/register', async (req, res) => {
  try {
    const { firstName, lastName, gender, dob, email, password,mobile } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !gender || !dob || !email || !password || !mobile) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists.' });
    }

      // Validate mobile number format
      const mobileRegex = /^\d{10}$/; // Adjust regex for your requirements
      if (!mobileRegex.test(mobile)) {
        return res.status(400).json({ message: 'Invalid mobile number format.' });
      }
    // Validate password strength
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user
    const newUser = new User({
      firstName,
      lastName,
      gender,
      dob,
      mobile,
      email,
      password: hashedPassword,
     
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.', user: newUser });
  } catch (error) {
    console.error('Error in Register:', error);
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
});

// Login a user
router.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful.', token,  user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobail: user.mobile,
      id: user._id,
    },
   });
   
  } catch (error) {
    console.error('Error in Login:', error);
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
});

module.exports = router;
