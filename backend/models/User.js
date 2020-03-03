const mongoose = require("mongoose");

const schema = mongoose.Schema({
  nom : String,
  prenom : String,
  email : String,
  motDePasse : String
})

module.exports = mongoose.model("User", schema);