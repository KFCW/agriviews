const express = require("express");
const auth = require("../middleware/auth.js")
const multer = require("../middleware/multer-config.js");
const productCtrl = require("../controllers/productController.js")



const router = express.Router();

// route ajout, modif et supp produits
router.post("/add",auth, multer,productCtrl.addProduct);
router.put("/add", auth, multer,productCtrl.updateProduct);
router.delete("/add",auth, productCtrl.deleteProduct);
router.get("/products", auth, productCtrl.getProduct);


module.exports = router;

