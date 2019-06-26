const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    if (!req.user) {
      return res
        .status(404)
        .send({ error: "user not found. Please create one." });
    }
    res.send(req.user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// LOGIN
router.post("/", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send({ error: "Email or Password Incorrect." });
  }

  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) {
    return res.status(400).send({ error: "Email or Password Incorrect." });
  }
  try {
    const token = jwt.sign(
      { user: { id: user._id } },
      config.get("jwtSecret"),
      { expiresIn: "7 days" }
    );
    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
