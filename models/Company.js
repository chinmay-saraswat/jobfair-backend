// models/Company.js
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  hrName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String },

  // Multiple Job Positions (Role-wise salary + openings)
  jobRoles: [
    {
      roleName: { type: String, required: true },
      openings: { type: Number, required: true },
      expectedSalary: { type: Number, required: true } // Required field for each role
    }
  ],

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Company", companySchema);
