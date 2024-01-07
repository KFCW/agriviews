const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema({
    email : {type : String, require: true,unique : true},
    message : {type : String, require: true},
})

const feedback = mongoose.model("Feedbacks", feedbackSchema);
module.exports = feedback;