const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Get logged in user");
});

router.post("/", async (req, res) => {
  res.send("Log in user");
});

module.exports = router;
