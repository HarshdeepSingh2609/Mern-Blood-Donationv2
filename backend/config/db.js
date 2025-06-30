// const mongoose=require("mongoose");

// const connectDB=async()=>{
//     try {
//        await mongoose.connect("mongodb://localhost:27017/jobportal");
//        console.log("connected to database...");
//     } catch (error) {
//         console.log(error);
//     }
// };
// module.exports=connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.log("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
