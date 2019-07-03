const express = require("express");
const connectDB = require("../config/db");
cors = require("cors");

const userRoutes = require("./routes/users");
const contactRoutes = require("./routes/contacts");

const app = express();
// Connect db
connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRoutes);
app.use("/contacts", contactRoutes);

module.exports = app;
