const express = require("express");
const adminCtrl = require("../controllers/adminController");

const router = express.Router();

router.post("/", adminCtrl.createSuperAdmin);
router.post("/", adminCtrl.loginAdmin);

module.exports = router;