// models/Company.js
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  HRName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  Contact: { type: String, required: true },
  address: { type: String },

  // Multiple Job Positions (Role-wise salary + openings)
  jobRoles: [
    {
      roleName: { type: String, required: true },
      openings: { type: Number, required: true },
      expectedSalary: { type: Number, required: true }, // Required field for each role
      JobLocation : {type :String,required:true},
      technologyFeild :{type:String,required:true}
    }
  ],

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Company", companySchema);
