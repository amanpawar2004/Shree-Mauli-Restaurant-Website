const express = require("express");

const {
  createBooking,
  getAllBookings,
  updateBookingStatus,
  deleteBooking,
} = require("../controllers/bookingController");

const router = express.Router();

// Customer
router.post("/", createBooking);

// Admin
router.get("/", getAllBookings);
router.put("/:id", updateBookingStatus);
router.delete("/:id", deleteBooking);

module.exports = router;