const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const todoRoutes = require("./routes/todos");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ ERROR: Missing MONGO_URI in .env file");
  process.exit(1); // Stop execution if MongoDB URI is missing
}

// Middleware
app.use(cors());
app.use(express.json()); // Enables JSON body parsing
app.use("/api", todoRoutes);

// MongoDB Connection
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err.message);
    process.exit(1); // Stop the server if DB connection fails
  });
