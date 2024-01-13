const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const Admin = require('../models/adminModel');
require('dotenv').config({path: "process.env"});

//--------------Idnetifiant superAdmin----------------
const adminId = process.env.ADMIN_ID || "admin";
const adminPassword = process.env.ADMIN_PASSWORD || "admin";

//----------------------Cle token----------------
const secretKey = 'agriview';

//-------------Creation d'un superAdmin---------------------___
async function createSuperAdmin(req, res) {
  try {
    const existingAdmin = await Admin.findOne({ id: adminId });

    if (!existingAdmin) {
      const hashedPassword = bcrypt.hashSync(adminPassword, 10);
      const adminCredentials = new Admin({ id: adminId, password: hashedPassword });
      await adminCredentials.save();

      console.log('Superadministration créée avec succès.');

      // Générer un token pour le super admin
      const token = jwt.sign({ adminId: adminCredentials.id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }, secretKey);
      
      // Stockez le token dans la session
      req.session.token = token;

      // Renvoyez le token au frontend si nécessaire
      res.json({ token });
      
      res.status(201).json({ message: 'Superadministration créée avec succès.', token });
    } else {
      console.log('La superadministration existe déjà.');
      res.status(200).json({ message: 'La superadministration existe déjà.' });
    }
  } catch (error) {
    console.error('Erreur lors de la création de la superadministration:', error.message);
    res.status(500).json({ error: 'Erreur lors de la création de la superadministration.' });
  }
};

//-----------------Login du superadmin-------------
  loginAdmin = async (req, res) => {
    try {
      const admin = await Admin.findOne({ id: adminId });
  
      if (!admin) {
        return res.status(401).json({ message: "Paire identifiant/mot de passe incorrecte" });
      } else {
        const validPassword = await bcrypt.compare(req.body.password, admin.password);
  
        if (!validPassword) {
          return res.status(401).json({ message: "Paire identifiant/mot de passe incorrecte" });
        } else {
          // Générer un token pour l'admin
          const token = jwt.sign({ adminId: admin.id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }, secretKey);
           
          // Stockez le token dans la session
          req.session.token = token;

          // Renvoyez le token au frontend si nécessaire
          res.json({ token });

          res.status(200).json({
            adminId: admin.id,
            token,
          });
        }
      }
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

module.exports = { createSuperAdmin, loginAdmin };
  

