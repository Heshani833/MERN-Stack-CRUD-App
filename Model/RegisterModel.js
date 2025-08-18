const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
name:{
    type: String,
    required: true //validate
},

gmail:{
    type: String,
    required: true //validate
},



password:{
    type: String,
    required: true //validate
}


});

module.exports = mongoose.model(
    "RegisterModel",  //filename
    registerSchema  //function name
);