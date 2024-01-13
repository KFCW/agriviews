const nodemailer = require('nodemailer');
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const Demandes = require('../models/demandeModel');
const crypto = require("crypto");

let generatedIds = new Set();

idProductorGenered = () => {

    const length = 5;
    let newId;

    do{

        const bytes = crypto.randomBytes(Math.ceil(length/2));
        newId = bytes.toString("hex").slice(0, length);
    } while(generatedIds.has(newId))
    
    generatedIds.add(newId);
    return newId;
}


// Connection db
const mongoUrl = 'mongodb://localhost:27017';
const dbName = "AGRIVIEW";

// Conencter un client à la db
const connectToDB = async () => {
    const client = new MongoClient(mongoUrl,{ useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Connecté à la base de données");
        return client.db(dbName);
    } catch(error) {
        console.error("Erreur de connexion à la base de donnée: ", error);
        throw error;
    }
};


//--------------------Envoi email producteur demandes---------------------
exports.sendEmail = async (email, id, password) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kadjobubbleup@gmail.com',
            pass: 'developpeurweb123',
        },
    });

    const mailOptions = {
        from: 'kadjobubbleup@gmail.com',
        to: email,
        subject: 'Bienvenue sur AgriDigital, veuillez récupérer vos identifiants de connexion.',
        text: `Votre identifiant : ${id}\nVotre mot de passe : ${password}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email envoyé : ' + info.response);
        return info;
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        throw error;
    }
};


/* The code block `exports.addDemande` is a function that handles the addition of a new demand from a
producer. */
//-----------------------------Ajouter une demande------------------------
exports.addDemande = async (req, res) => {

        try {
            const { email, name, password, tel, operator, isAccept } = req.body;

            // Hashage du mot de passe de manière asynchrone
            const hash = await bcrypt.hash(password, 10);

            // Id généré du producteur
            const id = idProductorGenered();

            // Création de l'objet productor avec le mot de passe haché
            const productor = new Demandes({
                idProductor: id,
                email: email,
                name: name,
                password: hash,
                tel: tel,
                operator: operator,
                isAccept: isAccept
            });

            // Sauvegarde de la nouvelle demande dans la base de données
            const savedProductor = await productor.save();

            // Répondre avec les données sauvegardées
            res.status(201).json({ message: "Demande producteur en cours...", data: savedProductor });
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement de la demande dans la base de données:', error);
            res.status(500).json({ error: 'Erreur lors de l\'enregistrement de la demande dans la base de données' });
        }
        
        //-----------------------Envoi email à l'utilisateur------------------
        // await sendEmail(email, id, password);
};



//------------------Affiche toutes les demandes ------------------------
exports.getListDemandes = async (req, res) => {
    try {
        const db = await connectToDB();
        const demandeCollection = db.collection('demandes');

        const demandes = await demandeCollection.find({}).toArray();
        res.json(demandes)
        
    }catch (error) {
        console.error('Erreur lors de la récupération des demandes depuis la base de données:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des demandes depuis la base de données' });
      }
};


