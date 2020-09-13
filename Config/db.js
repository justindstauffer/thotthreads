const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://jstauff:TestMongo12345@cloudsnipe.stdtd.mongodb.net/users?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("We are connected!");
});

module.exports = db;