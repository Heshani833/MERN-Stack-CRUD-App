//atz0zLPX66IpqoaE

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoute");

const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json()); //to parse JSON data & response to json
app.use("/users", router);

mongoose.connect("mongodb+srv://admin:atz0zLPX66IpqoaE@cluster0.b7xdaxc.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})

.catch((err) => console.log(err));

//call register model

require("./Model/RegisterModel");
const Register = mongoose.model("RegisterModel");
app.post("/register", async (req, res) => {
    const { name, email,  password } = req.body;
    try {
        await UserActivation.create({
            name,
            email,
            password    
        })

        res.send({status: "ok"});

    }

    catch(err){
        res.send({status:"error"})
    }
});