// All Imports
const bodyParser = require("body-parser");
const express = require("express");

// All Configs
require("dotenv").config;
const app = express();
const PORT = process.env.PORT || 8000;
const DB = require("./database/Database");
app.use(bodyParser.urlencoded({ extended: false }));
// parser request of body parser
app.use(bodyParser.json());

// parse request of content type application/json
// app.use(express.json());

// parse request of content type - application/x-www-form-urlencoded.
app.use(
  express.urlencoded({
    extended: true,
  })
);

const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");

// Routes
app.get("/api", (req, res) => {
  res.send("Welcome to api");
});

// Register
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);

// error is route does not exists
app.use((req, res) => {
  res.status(404).json("404: API does not exists");
});

// Server Listening
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
