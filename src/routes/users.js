const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const User = require("../models/user");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send({ error: "Please fill in all fields." });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .send({ error: "Password too short (min 6 characs.)" });
  }

  const userDup = await User.findOne({ email });
  if (userDup) {
    return res.status(400).send({ error: "This email is already used" });
  }
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send({ error: "Email or Password Incorrect." });
  }

  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) {
    return res.status(400).send({ error: "Email or Password Incorrect." });
  }
  try {
    const token = jwt.sign({ id: user._id }, config.get("jwtSecret"), {
      expiresIn: "7 days"
    });

    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET USER
router.get("/me", auth, async (req, res) => {
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

// PATCH USER
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
    res.status(400).send({ error: "Update invalid." });
  }
});

// DELETE USER
router.delete("/:id", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send(`user '${req.user.name}' was successfuly deleted`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
