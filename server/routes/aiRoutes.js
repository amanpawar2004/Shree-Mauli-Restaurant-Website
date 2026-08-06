const express = require("express");
const { recommendFood } = require("../controllers/aiController");

const router = express.Router();

router.post("/recommend", recommendFood);

module.exports = router;