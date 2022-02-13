const express = require("express");
const Task = require("../models/task");
require("../db/connect");
const router = new express.Router();

router.get("/task", async (req, res) => {
  try {
    const task = await Task.find({});
    res.send(task);
  } catch (err) {
    res.status(500).send("Error");
  }
});

router.post("/task", async (req, res) => {
  try {
    const task = new Task(req.body);
    const doc = await task.save();
    res.status(201).send(doc);
  } catch (err) {
    res.status(500).send("Task not created..");
  }
});
module.exports = router;
