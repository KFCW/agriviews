const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    id : {type : String, require: true, unique : true},
    title : {type : String, require: true},
    description : {type : String, require: true},
    image : {type : String, require: true},
    price : {type : Number, require: true},
    category : {type : String, require: true},
})

const product = mongoose.model("Products", productSchema);
module.exports = product;