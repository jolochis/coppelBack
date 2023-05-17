const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connection = async () => {
  try {
    const db = await mongoose.connect(
      `${process.env.DATABASE_URL}${process.env.DATABASE_NAME}`
    );

    console.log(`Connected to: ${db.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
