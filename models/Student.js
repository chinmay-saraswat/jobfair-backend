// models/Student.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },

  Contact: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^[0-9]{10}$/.test(v),
      message: "Contact number must be exactly 10 digits"
    }
  },
  collegeName: { type: String, required: true },
  district:{type: String, required: true},
  city:{type: String, required: true},
  state:{type:String,required:true},
  id: {
    type: String,
    unique: true,
  },

  courseName: { type: String, required: true },
  
  branch: { type: String, required: true },
  year:{type :String, required:true},
  passoutYear: { type: Number, required: true },

  studentCode: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
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
