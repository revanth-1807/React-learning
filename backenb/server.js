const express = require("express");
// require("dotenv").config();
// const studentRoutes = require("../Student form/src/routes/studentRoutes");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Routes
// app.use("/", studentRoutes);

// Health check or base route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});