const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/VeryEasy");
    console.log("DataBase Connected Successfully");
  } catch (err) {
    console.error("Error During Connection", err);
    process.exit(1);
  }
};

module.exports = connectDB;
