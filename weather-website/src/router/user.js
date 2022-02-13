const express = require("express");
const User = require("../models/user");
require("../db/connect");
const router = new express.Router();

router.get("/user/:id", async (req, res) => {
  // res.send("User Got..");

  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      res.send("User Not Found");
      return;
    }
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send("Error");
  }

  // const id = req.params.id;
  // User.findById(id)
  //   .then((user) => {
  //     if (!user) {
  //       res.send("User Not Found");
  //     }
  //     console.log(user);
  //     res.status(201).send(user);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).send();
  //   });
  // res.send(req.params.id)
});

router.post("/user", async (req, res) => {
  try {
    const user = new User(req.body);
    const doc = await user.save();
    res.status(201).send(doc);
  } catch (err) {
    res.status(500).send("User not created..");
  }

  // const user = new User({
  //   name: "Jameel Ahmed",
  //   email: "jameeel@gmail.com",
  //   age: 40,
  //   password: "jameel@123",
  // });
});

router.delete("/user/:id", async (req, res) => {
  // res.send("User Deleted..");
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    res.status(200).send(user + "User Successfully Deleted...");
  } catch (err) {
    res.status(500).send("Unable to delete");
  }
  // const id = req.params.id;
  // User.findByIdAndDelete(id)
  //   .then((user) => {
  //     if (!user) {
  //       res.status(404).send("User not found");
  //       return;
  //     }
  //     res.status(200).send(user + "User Successfully Deleted...");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).send("unable to delete");
  //   });
});
router.patch("/user/:id", async (req, res) => {
  // res.send("User Updated..");

  const allowUpadte = ["name", "password", "age"];
  const updates = Object.keys(req.body);
  const validUpadte = updates.every((update) => allowUpadte.includes(update));
  if (!validUpadte) {
    res.status(400).send("Bad Request Unable to update");
  }
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send("could nor update the user");
  }
});

module.exports = router;
