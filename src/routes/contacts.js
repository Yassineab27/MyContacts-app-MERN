const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Get contacts");
});

router.post("/", async (req, res) => {
  res.send("Post a contact");
});

router.patch("/:id", async (req, res) => {
  res.send("Patch a contact");
});

router.delete("/:id", async (req, res) => {
  res.send("delete a contact");
});

module.exports = router;
