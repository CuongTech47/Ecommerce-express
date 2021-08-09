const express = require("express");

const router = express.Router();

const adminController = require("../app/controllers/AdminController");


router.get("/",adminController.show_dashboard)



module.exports = router;
