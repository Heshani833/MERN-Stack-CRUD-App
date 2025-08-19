//atz0zLPX66IpqoaE

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoute");
const Register = require("./Model/RegisterModel"); // Import model directly

const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());
app.use("/users", router);

mongoose
  .connect("mongodb+srv://admin:atz0zLPX66IpqoaE@cluster0.b7xdaxc.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Register route with better error handling
app.post("/register", async (req, res) => {
  const { name, gmail, password } = req.body;

  if (!name || !gmail || !password) {
    return res.status(400).json({
      status: "error",
      message: "Missing required fields",
    });
  }

  try {
    const user = await Register.create({
      name,
      gmail,
      password,
    });
    return res.status(201).json({ status: "ok", user });
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).json({ status: "error", message: err.message });
  }
});

// Login route with better error handling
app.post("/login", async (req, res) => {
  const { gmail, password } = req.body;

  if (!gmail || !password) {
    return res
      .status(400)
      .json({ status: "error", message: "Missing credentials" });
  }

  try {
    const user = await Register.findOne({ gmail });
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    if (user.password === password) {
      return res.status(200).json({
        status: "ok",
        user: { name: user.name, gmail: user.gmail },
      });
    } else {
      return res
        .status(401)
        .json({ error: "error", message: "Incorrect password" });
    }
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ status: "error", message: "Server error" });
  }
});
