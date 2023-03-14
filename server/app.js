const express = require("express");
const mongoose = require("mongoose");
const config = require(".//config/config.json");
mongoose.connect(config.connectionString, { useNewUrlParser: true });
mongoose.connection
  .once("open", function () {
    console.log("Conection has been made!");
  })
  .on("error", function (error) {
    console.log("Error is: ", error);
  });

var app = express();
app.use(express.json());
var server = require('http').createServer(app);
// Start server
server.listen(config.port, function () {
  console.log("Express server listening on", config.port, app.get("env"));
});

require('./routes')(app);
// Expose app
exports = module.exports = app;
