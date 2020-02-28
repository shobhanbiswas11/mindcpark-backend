const mongoose = require("mongoose");
// const Fawn = require("fawn");
// const config = require("config");

const dbName = "mongodb://localhost:27017/blood_bank";

module.exports = function() {
  mongoose.connect(dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;

  db.on("error", () => {
    console.log("Something went Wrong while conneting to the Database");
  });
  db.once("open", () => {
    console.log("Connected to the Database");
  });
};
