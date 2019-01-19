const mongoose = require("mongoose");
const User = mongoose.model("User", {
  name: {
    type: String,
    minlength: 1,
    required: true,
    trim: true
  },
  email: {
    type: String,
    minlength: 1,
    required: true,
    trim: true
  },
  age: {
    type: Number
  }
});

module.exports = { User };
