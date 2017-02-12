const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MediumSchema = new Schema({
    title: String,
    uniformTitle: String,
    description: String,
    dateReleased: Date,
    assets: [{ type: Number, ref: "Asset" }]
});

module.exports = mongoose.model("Medium", MediumSchema);