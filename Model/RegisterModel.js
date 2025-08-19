const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gmail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Export the model
module.exports = mongoose.model("RegisterModel", RegisterSchema);
