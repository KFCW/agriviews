const express = require("express");
const prodCtrl = require("../controllers/prodController");


const router = express.Router();
router.post('/', prodCtrl.loginProd);

module.exports = router;