const mongoose = require('mongoose')

const userSchema  = new mongoose.Schema({
    email : {type : String, required: true, unique : true},
    psw : {type : String, required: true},
    image : {type : Buffer, require: false},
    isAdmin : {type : Boolean, required: true},
})

const user = mongoose.model("User", userSchema)
module.exports = user;