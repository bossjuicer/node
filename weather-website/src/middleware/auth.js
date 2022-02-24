const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret";
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    console.log(decoded);
    if (!user) {
      throw new Error();
    }
    console.log(user);
    next();
  } catch (e) {
    res.status(500).send("Sorry Error Occured!");
  }
};

module.exports = auth;
