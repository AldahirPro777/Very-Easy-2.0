const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL_DB, {
    });

    console.log("DataBase Connected Successfully");
  } catch (err) {
    console.error("Error During Connection", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
