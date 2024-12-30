const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.error("DB connection failed", error.message);
    process.exit(1);
  }
};

module.exports = connectToDB;
