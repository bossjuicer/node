const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret";

const userSchema = new mongoose.Schema({
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
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = bcrypt.hashSync(user.password, 10);
  }
  next();
});
userSchema.methods.generateToken = async function () {
  const user = this;
  console.log(user);
  const token = jwt.sign({ _id: user._id.toString() }, JWT_SECRET);
  user.tokens = [...user.tokens, { token }];
  await user.save();
  return token;
};
const User = mongoose.model("User", userSchema);

module.exports = User;
