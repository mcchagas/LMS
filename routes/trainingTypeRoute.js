const express = require("express");
const trainingTypeController = require('./../controllers/trainingTypeController');
const router = express.Router();


router
    .route("/")
    .get(trainingTypeController.get);

module.exports = router;
