const express = require("express");
const router = express.Router();

const {
  getAllMenu,
  getSingleMenu,
  addMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/menuController");

const upload = require("../middleware/upload");

// Public Routes
router.get("/", getAllMenu);
router.get("/:id", getSingleMenu);

// Admin Routes
router.post("/", upload.single("image"), addMenu);
router.put("/:id", upload.single("image"), updateMenu);
router.delete("/:id", deleteMenu);

module.exports = router;