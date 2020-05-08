const mongoose = require("mongoose");
const config = require("./index");

const db = mongoose
  .connect(config.mongo_uri, { useNewUrlParser: true })
  .then(() => {
    console.log("Connect to DB");
  })
  .catch(err => console.log(err));

module.exports = db;
