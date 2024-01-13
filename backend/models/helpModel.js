const mongoose = require("mongoose")

const helpSchema = new mongoose.Schema({
    email : {type : String, require: true, unique : true, ref:"User"},
    objet : {type : String, require: true},
    message : {type : String, require: true}
})

const help = mongoose.model("Helps", helpSchema);
module.exports = help;