const jwt = require("jsonwebtoken");
const jwt_secret = "jwt_secret";
const token = jwt.sign("user 1", jwt_secret);
var data=jwt.verify(token, "jwt_secret");
