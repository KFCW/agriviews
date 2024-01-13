const express = require("express");
const auth = require("../middleware/auth");
const helpCtrl = require("../controllers/helpController");

const router = express.Router();
router.post("/contact", auth, helpCtrl.helpUser);

module.exports = router;