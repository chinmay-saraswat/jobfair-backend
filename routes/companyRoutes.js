const express = require("express");
const Company = require("../models/Company");
const router = express.Router();


router.post("/register", async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;  // <-- IMPORTANT
