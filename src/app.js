const express = require("express");
const path = require("path");
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

// Serve Statics in prod
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
  );
}

module.exports = app;
