const express = require("express");

const {
  createMessage,
  getMessages,
  deleteMessage,
} = require("../controllers/messageController");

const router = express.Router();

// Customer
router.post("/", createMessage);

// Admin
router.get("/", getMessages);
router.delete("/:id", deleteMessage);

module.exports = router;