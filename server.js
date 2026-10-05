const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const authRoutes = require("./routes/authRoutes");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

const authMiddleware = require("./middleware/authMiddleware");

app.get("/api/test", authMiddleware, (req, res) => {
  res.json({ message: "Protected route accessed", user: req.user });
});


// Test route
app.get("/", (req, res) => {
  res.send("CampusCart Backend Running 🚀");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});