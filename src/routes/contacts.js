const express = require("express");
const Contact = require("../models/contact");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user._id }).sort({
      createdAt: -1
    });
    res.send(contacts);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const contact = new Contact({
      ...req.body,
      user: req.user._id
    });
    await contact.save();
    res.status(201).send(contact);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  res.send("Patch a contact");
});

router.delete("/:id", async (req, res) => {
  res.send("delete a contact");
});

module.exports = router;
