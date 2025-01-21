const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true },
  resetPasswordOTP: {
    type: String,
    default: null, // Initialize as null by default
  },
  resetPasswordExpires: {
    type: Date,
    default: null, // Initialize as null by default
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
