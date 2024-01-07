const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    id : {type : Number, require: true, unique : true},
    titre : {type : String, require: true},
    domaine : {type : String, require: true},
    price : {type : Number, require: true},
    description : {type : String, require: true},
    image : {type : Buffer, require: true},
})

const product = mongoose.model("Products", productSchema);
module.exports = product;