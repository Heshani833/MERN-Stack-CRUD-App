//atz0zLPX66IpqoaE

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoute");

const app = express();

//middleware
app.use(express.json()); //to parse JSON data & response to json
app.use("/users", router);

mongoose.connect("mongodb+srv://admin:atz0zLPX66IpqoaE@cluster0.b7xdaxc.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})

.catch((err) => console.log(err));