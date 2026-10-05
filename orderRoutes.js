const express = require("express");
const router = express.Router();

// Create Order
router.post("/", (req, res) => {
  res.json({ message: "Order placed successfully" });
});

// Get Orders
router.get("/", (req, res) => {
  res.json({ message: "Orders fetched successfully" });
});

module.exports = router;