const express = require("express");
const router = express.Router();
const User = require("../Model/UserModel");
const UserControl = require("../Controlers/UserControl");

router.get("/", UserControl.getAllUsers);

module.exports = router;