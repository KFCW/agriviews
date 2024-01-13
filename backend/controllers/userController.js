const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

//----------------------Cle token----------------
const secretKey = 'agriview';

// -----------------Register user -----------------
exports.signup = async (req, res, next) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
        });
        await user.save();
        res.status(201).json({ message: 'Utilisateur créé !' });
    } catch (error) {
        res.status(400).json({ error });
    }
};

// ----------------Login user---------------------------------------
exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte' });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte' });
        }

        const token = jwt.sign({ userId: user._id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }, secretKey);

        // Stockez le token dans la session
        req.session.token = token;

        // Renvoyez le token au frontend si nécessaire
        res.json({ token });

        res.status(200).json({
            userId: user._id,
            token,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
};
