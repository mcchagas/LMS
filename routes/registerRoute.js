const express = require("express");
const registerController = require('./../controllers/registerController');
const router = express.Router();


router
    .route("/")
    .get(registerController.get);

module.exports = router;
