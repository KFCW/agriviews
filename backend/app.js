const express  = require("express");
const cors = require("cors");
const morgan = require('morgan');
const path   = require('path');
const connectionDB = require("./db/db");
const session = require("express-session");


// Importation routes
const userRoutes = require('./routes/userRoute')
const adminRoutes = require("./routes/adminRoute")
const demandeRoutes = require("./routes/demandeRoute")
const productRoutes = require('./routes/productRoute')
const helpRoutes = require("./routes/helpRoute")


// Connection à la  DB
connectionDB();

// Création d'application express()   
const app = express();

// Logger des requetes
app.use(morgan("dev"));

// Configurer les origines de l'app front et back
app.use(cors());

// Configuration de express-session
app.use(session({
    secret: 'agriview', // Clé secrète pour signer les cookies de session
    resave: false,
    saveUninitialized: true,
}));

// Extraire le corps du json() express.json() == body-parser()
app.use(express.json());


// Systeme de routage

//============= Client Routes ============
app.use('/api/user',userRoutes);
app.use('/api/user',userRoutes);
app.use('/api/user',helpRoutes);

//============= Admin Routes ============
app.use('/api/admin',adminRoutes);
app.use('/api/admin/dash',productRoutes);

//============= Producteur Routes =============
app.use('/api/productor',demandeRoutes);
app.use('/api/feedback',demandeRoutes);
app.use('/api/user',productRoutes);


//Stockage images
app.use('/images', express.static(path.join(__dirname, 'images')));





module.exports = app;