const mongoose = require("mongoose");

const demandeSchema = mongoose.Schema({
    idProductor: { type: String, unique: true, required: true},
    email : {type : String, require : true , unique : true},
    name : {type : String, require : true},
    password : {type : String, require : true},
    tel : {type : String, require : true},
    operator : {type : String, require : true},
    isAccept : {type: Boolean, require : true, default : false} 
});

const demandes = mongoose.model("Demandes", demandeSchema);

module.exports = demandes; 