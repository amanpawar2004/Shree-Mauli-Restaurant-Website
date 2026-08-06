const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// ==========================
// Import Routes
// ==========================

const menuRoutes = require("./routes/menuRoutes");
const adminRoutes = require("./routes/adminRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const messageRoutes = require("./routes/messageRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

// ==========================
// Connect Database
// ==========================

connectDB();

// ==========================
// Middleware
// ==========================

app.use(cors());
app.use(express.json());

// ==========================
// API Routes
// ==========================

// Menu APIs
app.use("/api/menu", menuRoutes);

// Admin APIs
app.use("/api/admin", adminRoutes);

// Booking APIs
app.use("/api/bookings", bookingRoutes);

// Contact Message APIs
app.use("/api/messages", messageRoutes);

// AI Food Recommendation APIs
app.use("/api/ai", aiRoutes);

// ==========================
// Home Route
// ==========================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Shree Mauli Restaurant Backend is Running...",
    version: "2.0.0",
  });
});

// ==========================
// 404 Route
// ==========================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// ==========================
// Start Server
// ==========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("======================================");
  console.log("🚀 Shree Mauli Restaurant Server");
  console.log(`🌐 Running on http://localhost:${PORT}`);
  console.log("🤖 Gemini AI Assistant Enabled");
  console.log("======================================");
});