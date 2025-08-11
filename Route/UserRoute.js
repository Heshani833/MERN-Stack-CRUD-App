const express = require("express");
const router = express.Router();
const User = require("../Model/UserModel");
const UserControl = require("../Controlers/UserControl");

router.get("/", UserControl.getAllUsers);
router.post("/", UserControl.addUser);
router.get("/:id", UserControl.GetById);



module.exports = router;