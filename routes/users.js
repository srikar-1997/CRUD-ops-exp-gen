const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });
  try {
    const a1 = await user.save();
    res.send(a1);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.sub = req.body.sub;
    const a1 = await user.save();
    res.send(a1);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await User.remove(user);
    res.send("delete Success");
  } catch (err) {
    res.send("Error" + err);
  }
});
module.exports = router;
