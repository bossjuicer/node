const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/task-app");
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(val) {
      if (!validator.isEmail(val)) throw new Error("Invalid email");
    },
  },
  age: {
    type: Number,
    validate(val) {
      if (val < 0) throw new Error("Age Should be greater than zero");
    },
  },
  password: {
    type: String,
    minLength: 4,
    required: true,
    validate(val) {
      if (val.toLowerCase() === "password")
        throw new Error("password cannot be password");
    },
  },
});

const user =new User({
    name:"Roshan Jahan",
    email: "roshan@gmail.com",
    age:56,
    password: "roshna@123"
});

user.save().then(console.log).catch(console.log)
