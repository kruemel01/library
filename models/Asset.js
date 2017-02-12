const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AssetSchema = new Schema({
    code: Number,
    available: Boolean,
    date: String,
    library: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Library"
    },
    classification: String,
});

module.exports = mongoose.model("Asset", AssetSchema);