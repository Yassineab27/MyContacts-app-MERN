const express = require("express");
const connectDB = require("../config/db");

const userRoutes = require("./routes/users");
const contactRoutes = require("./routes/contacts");
const authRoutes = require("./routes/auth");

const app = express();
// Connect db
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRoutes);
app.use("/contacts", contactRoutes);
app.use("/auth", authRoutes);

module.exports = app;
