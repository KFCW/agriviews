const Product = require("../models/productModel");
const fs = require("fs");

//---------------Ajout d'un produits----------------
exports.addProduct = async (req, res) => {
    try {
        const { id, title, description, image, price, category } = JSON.parse(req.body.Product);
        const Product = new Product({
            _id: id,
            title,
            description,
            image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
            price,
            category
        });

        await Product.save();

        res.status(201).json({ message: 'Produit créé ! ' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//---------------Modifier d'un produits----------------
exports.updateProduct = async (req, res) => {
    try {
        const { id, title, description, image, price, category } = req.file ? {
            ...JSON.parse(req.body.Product),
            image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...JSON.parse(req.body.Product) };

        const existingProduct = await Product.findById(id);
        if (!existingProduct) {
            return res.status(404).json({ error: 'Produit non trouvé' });
        }

        existingProduct.title = title;
        existingProduct.description = description;
        existingProduct.image = image;
        existingProduct.price = price;
        existingProduct.category = category;

        await existingProduct.save();

        res.json({ message: 'Produit mis à jour !', data: existingProduct });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// -----------------Supprimer un produits-------------------
exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        const existingProduct = await Product.findById(productId);
        if (!existingProduct) {
            return res.status(404).json({ error: 'Produit non trouvé' });
        }

        const filename = existingProduct.image.split('/images/')[1];
        fs.unlink(`images/${filename}`, async () => {
            await existingProduct.remove();
            res.json({ message: 'Produit supprimé !' });
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


//-----------Afficher produits-------------------
exports.getProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Produit non trouvé' });
        }

        res.json({ data: product });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération du produit' });
    }
};


