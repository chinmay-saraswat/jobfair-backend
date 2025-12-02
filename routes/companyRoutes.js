const express = require("express");
const Company = require("../models/Company");
const router = express.Router();


router.post("/register", async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    let message = "Something went wrong";

    // 🔹 Mongoose Validation Error
    if (error.name === "ValidationError") {
      const field = Object.keys(error.errors)[0];
      message = error.errors[field].message;
    }

    // 🔹 Duplicate Key (email already exists)
    else if (error.code === 11000) {
      if (error.keyPattern?.email) message = "Email already registered!";
    }

    res.status(400).json({ error: message });
  }
});

module.exports = router;  // <-- IMPORTANT
