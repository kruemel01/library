const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let LibrarySchema = new Schema({
    displayName: String,
});

module.exports = mongoose.model("Library", LibrarySchema);