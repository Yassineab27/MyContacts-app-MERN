const express = require("express");
const Contact = require("../models/contact");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({
      user: req.user._id
      // name: req.query.name
    }).sort({
      createdAt: -1
    });
    res.send(contacts);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", auth, async (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    return res
      .status(400)
      .send({ error: "Please provide your name and phone." });
  }

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

router.delete("/:id", auth, async (req, res) => {
  try {
    const contact = await Contact.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!contact) {
      return res.status(400).send({ error: "Contact not found." });
    }
    await contact.remove();
    res.send(`contact was successfuly deleted`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    const allowedUpdates = ["name", "phone", "email", "type"];
    const updates = Object.keys(req.body);
    const validUpdate = updates.every(update =>
      allowedUpdates.includes(update)
    );
    if (!validUpdate) {
      throw new Error();
    }
    const contact = await Contact.findOne({
      _id: req.params.id,
      user: req.user._id
    });
    if (!contact) {
      return res.status(404).send({ error: "contact not found." });
    }
    updates.forEach(update => (contact[update] = req.body[update]));
    await contact.save();
    res.send(contact);
  } catch (err) {
    res.status(400).send({ error: "update invalid!" });
  }
});

module.exports = router;
