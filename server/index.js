const express = require('express');
const path = require("path");
const volleyball = require("volleyball");

require('dotenv').config();
const mongoose = require('mongoose');

const port = process.env.PORT || 8888
const app = express();

mongoose.connect(process.env.MONGO_URI);

app.listen(port, console.log(`Server running on port: ${port}`)); 

// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./api"));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// error handling middleware
app.use((err, req, res, next) => {
   if (process.env.NODE_ENV !== "test") console.error(err.stack);
   res.status(err.status || 500).send(err.message || "Internal server error");
 });

module.exports = app;
