const mongoose = require("mongoose");

const connectDB = async () => {
  const URL = process.env.URL_DB || "localhost:27017/VeryEasy";

  try {
    await mongoose.connect(URL);

    console.log("DataBase Connected Successfully");
  } catch (err) {
    console.error("Error During Connection", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
