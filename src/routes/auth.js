const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Get logged in user");
});

router.post("/", async (req, res) => {
  try {
    res.send("Log in user");
  } catch (err) {}
});

module.exports = router;
