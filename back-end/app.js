const express = require('express');
const cors = require("cors");
const app = express();

const songController = require("./controllers/songController.js");

app.use(express.json());
app.use(cors());

app.use("/songs", songController);


app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

module.exports = app;
