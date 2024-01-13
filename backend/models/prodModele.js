const mongoose = require("mongoose");

const prodSchema = new mongoose.Schema({
    idProductor: { type: String, unique: true, required: true},
    name: {type: String, require : true},
    email: {type: String, require : true, unique: true},
    password: {type: String, require : true},
    tel: {type: Number, require : true},
    operator: {type: String, require : true},
    isAccept: {type: String, require : true, default: true, ref: "Demandes"}
});

const producteur = mongoose.model("Producteurs", prodSchema);
module.exports = producteur;