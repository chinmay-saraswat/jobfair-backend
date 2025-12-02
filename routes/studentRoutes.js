
const Student = require("../models/Student");
const express = require("express");


const router = express.Router();

router.post("/register",async(req,res)=>{
    try {
        const student = await Student.create(req.body)
        res.status(201).json(student);
    } catch (error) {
    let message = "Something went wrong";

    // 🔹 Validation Error
    if (error.name === "ValidationError") {
      const field = Object.keys(error.errors)[0];
      message = error.errors[field].message;
    }

    // 🔹 Duplicate Key Error
    else if (error.code === 11000) {
      if (error.keyPattern.email) message = "Email already registered!";
      if (error.keyPattern.id) message = "GovernmentID already exists!";
      if (error.keyPattern.studentCode) message = "Student code already exists!";
    }

    res.status(400).json({ error: message });
  }
})

module.exports = router