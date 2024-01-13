const express = require("express");
const demCtrl = require("../controllers/demandeController")
const router = express.Router();

//-------------------Route nouvelle demande et autres-------------------------
router.post("/signup", demCtrl.addDemande);
router.get("/admin/dash", demCtrl.getListDemandes);
router.post("/admin/dash", demCtrl.sendEmail);

module.exports = router;