const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const verifiedToken = jwt.verify(token, config.get("jwtSecret"));
    const user = await User.findById(verifiedToken.id);
    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    res.status(401).send({ error: "Not authorized. Please authenticate." });
  }
};

module.exports = auth;
