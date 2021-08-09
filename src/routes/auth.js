const express = require('express')

const router = express.Router()

const adminController = require("../app/controllers/AdminController");


router.post("/register",adminController.register)
router.post("/", adminController.dashboard);


module.exports = router;
