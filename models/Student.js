// models/Student.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: [true, "Full name is required"] },
  email: { type: String, required: [true, "Email is required"], unique: true },

  Contact: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^[0-9]{10}$/.test(v),
      message: "Contact number must be exactly 10 digits",
    },
  },
  id: {
    type: String,
    unique: true,
    sparse: true,
    required: false,
    default: undefined,
  },

  collegeName: { type: String, required: [true, "College name is required"] },
  district: { type: String, required: [true, "District is required"] },
  city: { type: String, required: [true, "City is required"] },
  state: { type: String, required: [true, "State is required"] },
  courseName: { type: String, required: [true, "Course name is required"] },
  branch: { type: String, required: [true, "Branch is required"] },
  year: { type: String, required: [true, "Year is required"] },
  passoutYear: { type: Number, required: [true, "Passout year is required"] },
  studentCode: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

// 📌 Simple Unique Code Logic
studentSchema.pre("save", async function (next) {
  if (!this.studentCode) {
    // Count total students and add +1
    const count = await mongoose.model("Student").countDocuments();

    // Generate code like: STD-00001, STD-00002 ...
    this.studentCode = `JOBFAIR-${String(count + 1).padStart(5, "0")}`;
  }

  next;
});

module.exports = mongoose.model("Student", studentSchema);
