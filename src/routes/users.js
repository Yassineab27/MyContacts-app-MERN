const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", async (req, res) => {
  const userDup = await User.findOne({ email: req.body.email });
  if (userDup) {
    return res.status(400).send({ error: "This email is already used" });
  }
  try {
    const user = new User(req.body);

    const token = jwt.sign(
      { user: { id: user._id } },
      config.get("jwtSecret"),
      {
        expiresIn: "7 days"
      }
    );

    await user.save();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    const allowedUpdates = ["name", "email", "password"];
    const updates = Object.keys(req.body);
    const isValidUpdate = updates.every(update =>
      allowedUpdates.includes(update)
    );
    if (!isValidUpdate) {
      throw new Error();
    }

    updates.forEach(update => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (err) {
    res.status(400).send({ error: "update invalid." });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send(`user '${req.user.name}' was successfuly deleted`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
