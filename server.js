const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const studentRoutes = require("./routes/studentRoutes");
const companyRoutes = require("./routes/companyRoutes");

dotenv.config();
const app = express();

//middlewares

app.use(cors());
app.use(express.json());

connectDB();

//app.use("/api/student",studentRoutes);
app.use("/api/company",companyRoutes);

app.get("/",(req,res)=>{
    res.send("Job Fair Backend Running...");
})

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});