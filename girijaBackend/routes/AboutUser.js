const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Path to your User model
const mongoose = require("mongoose");

// const Address = require("../models/Address")

// Route to fetch "About" data by userId
router.get("/about/:userId", async (req, res) => {
    const { userId } = req.params;
 
    try {
      // Validate userId
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid user ID format" });
      }
  
      // Find user by ID
      const user = await User.findById(userId, "address pincode occupationCountry language email mobile");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Return the user data
      res.status(200).json(user);
      console.log("api response",res);
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({ message: "Error fetching user data", error: error.message });
    }
  });

  //for add
 
// Middleware

  
router.patch("/update/:id", async (req, res) => {
    try {
        const userId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        const updates = {};
        if (req.body.address) updates.address = req.body.address;
        if (req.body.pincode) updates.pincode = req.body.pincode;
        if (req.body.occupationCountry) updates.occupationCountry = req.body.occupationCountry;
        if (req.body.language) updates.language = req.body.language;

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ message: "No fields to update provided" });
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user: updatedUser }); // Explicit 200 status

    } catch (error) {
        console.error("Error updating user:", error);

        if (error.name === "ValidationError") {
            return res.status(400).json({ message: "Validation error", errors: error.errors });
        } else if (error.name === "CastError" && error.kind === "ObjectId") {
            return res.status(400).json({ message: "Invalid user ID" });
        } else if (error.code === 11000) {
            return res.status(400).json({ message: "Duplicate key error", error: error });
        }

        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

module.exports = router;