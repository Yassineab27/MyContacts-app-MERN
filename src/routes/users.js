const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/me", async (req, res) => {
  res.send("Get a user");
});

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

module.exports = router;
