const mongoose = require("mongoose")

const helpSchema = new mongoose.Schema({
    email : {type : Number, require: true, unique : true},
    objet : {type : String, require: true},
    message : {type : String, require: true}
})

const help = mongoose.model("Helps", helpSchema);
module.exports = help;