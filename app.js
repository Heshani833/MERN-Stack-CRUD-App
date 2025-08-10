//atz0zLPX66IpqoaE

const express = require("express");
const mongoose = require("mongoose");

const app = express();

//middleware
app.use("/", (req, res, next) => {
    res.send("HI");
})

mongoose.connect("mongodb+srv://admin:atz0zLPX66IpqoaE@cluster0.b7xdaxc.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})

.catch((err) => console.log(err));