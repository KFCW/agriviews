const help = require("../models/helpModel");

exports.helpUser = async (req, res) => {
    try{
        const help = new help({
            email : req.body.email,
            objet : req.body.objet,
            message : req.body.message,
        })
        await help.save();
        res.status(201).json({message : "Votre aide a été bien receptionnée!"})
    } catch(error){
        return res.status(400).json({error})
    }
}