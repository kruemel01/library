const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({

});

module.exports = mongoose.model("User", UserSchema);