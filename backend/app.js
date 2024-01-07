const express  = require("express");
const bodyparser = require("body-parser");
const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config({path: "process.env"})

const db  = process.env.DATABASE_URL
const userRoutes = require('./routes/user')

// Connection à la  DB
mongoose.connect(`${db}`)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Création d'application express()   
const app = express();

// Extraire le corps du json() express.json() == body-parser()
app.use(bodyparser.json());

// Configurer les origines de l'app front et back
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


// Systeme de routage
app.use('/api/',userRoutes);





module.exports = app;