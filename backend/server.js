const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const connectDB= require ("./src/config/db");

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("api is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});