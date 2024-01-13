// db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: "process.env"});

const connectDB = async () => {
  try {
    const db = process.env.DATABASE_URL;
    await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connexion à MongoDB réussie !');
  } catch (error) {
    console.error('Erreur lors de la connexion à MongoDB :', error.message);
    process.exit(1); // Quitter le processus Node.js en cas d'échec de la connexion
  }
};

module.exports = connectDB;
