const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: [true, "Company name is required"] },
  HRName: { type: String, required: [true, "HR Name is required"] },
  email: { type: String, required: [true, "Email is required"], unique: true },
  Contact: { type: String, required: [true, "Contact number is required"] },
  address: { type: String, required: [true, "Address is required"] },

  jobRoles: [
    {
      roleName: { type: String, required: [true, "Role name is required"] },
      openings: { type: Number, required: [true, "Openings count is required"] },
      expectedSalary: { type: Number, required: [true, "Expected salary is required"] },
      JobLocation: { type: String, required: [true, "Job location is required"] },
      technologyFeild: { type: String, required: [true, "Technology field is required"] },
    }
  ],

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Company", companySchema);
