const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Producteur = require('../models/prodModele')


//----------------------Cle token----------------
const secretKey = 'agriview';


// ----------------Login user---------------------------------------
exports.loginProd = async (req, res, next) => {
    try {
        const producteur = await Producteur.findOne({ email: req.body.email });
        if (!producteur) {
            return res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte' });
        }

        const validPassword = await bcrypt.compare(req.body.password, producteur.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte' });
        }

        const token = jwt.sign({ prodId: producteur._id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }, secretKey);

        // Stockez le token dans la session
        req.session.token = token;

        // Renvoyez le token au frontend si nécessaire
        res.json({ token });

        res.status(200).json({
            prodId: producteur._id,
            token,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
};
