const Menu = require("../models/Menu");

// ===============================
// GET ALL MENU
// ===============================
const getAllMenu = async (req, res) => {
  try {
    const menu = await Menu.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: menu.length,
      data: menu,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// GET SINGLE MENU
// ===============================
const getSingleMenu = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);

    if (!menu) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found",
      });
    }

    res.status(200).json({
      success: true,
      data: menu,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// ADD MENU
// ===============================
const addMenu = async (req, res) => {
  try {
    const menu = await Menu.create({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      isAvailable:
        req.body.isAvailable === "true" ||
        req.body.isAvailable === true,
      image: req.file ? req.file.path : "",
    });

    res.status(201).json({
      success: true,
      message: "Menu Added Successfully",
      data: menu,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// UPDATE MENU
// ===============================
const updateMenu = async (req, res) => {
  try {
    const existingMenu = await Menu.findById(req.params.id);

    if (!existingMenu) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found",
      });
    }

    const updatedData = {
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      isAvailable:
        req.body.isAvailable === "true" ||
        req.body.isAvailable === true,
      image: req.file ? req.file.path : existingMenu.image,
    };

    const menu = await Menu.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Menu Updated Successfully",
      data: menu,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// DELETE MENU
// ===============================
const deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);

    if (!menu) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found",
      });
    }

    await Menu.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Menu Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllMenu,
  getSingleMenu,
  addMenu,
  updateMenu,
  deleteMenu,
};