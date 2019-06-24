const express = require("express");

const userRoutes = require("./routes/users");
const contactRoutes = require("./routes/contacts");
const authRoutes = require("./routes/auth");

const app = express();

app.use("/users", userRoutes);
app.use("/contacts", contactRoutes);
app.use("/auth", authRoutes);

module.exports = app;
