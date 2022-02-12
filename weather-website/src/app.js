const express = require("express");
const User = require("./models/user");
require("./db/connect");
const port = 3000;
const app = express();
app.use(express.json());

app.get("/user", (req, res) => {
  console.log("User Created...");
  //   res.send("Getting User..");
  res.send(req.query.name);
  console.log(req.query.name);
});

app.post("/user", (req, res) => {
  const user = new User({
    name: "Jameel Ahmed",
    email: "jameeel@gmail.com",
    age: 40,
    password: "jameel@123",
  });
  user
    .save()
    .then((doc) => {
      res.status(201).send("User Createdddd..");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("User Not Created");
    });
});

app.listen(port, () => {
  console.log("Server Started..");
});
