require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = require("./config/db");
const Menu = require("./models/Menu");
const menuData = require("./data/menuData");

const seedDatabase = async () => {
  try {
    await connectDB();

    await Menu.deleteMany();

    await Menu.insertMany(menuData);

    console.log("✅ Menu data inserted successfully!");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();