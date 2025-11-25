
const Student = require("../models/Student");
const express = require("express");


const router = express.Router();

router.post("/register",async(req,res)=>{
    try {
        const student = await Student.create(req.body)
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

module.exports = router