const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.status(401).send({ error: "Please authenticate." });
    }

    const verifiedToken = jwt.verify(token, config.get("jwtSecret"));
    const user = await User.findById(verifiedToken.user.id);

    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
