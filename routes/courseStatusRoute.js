const express = require("express");
const courseStatusController = require('./../controllers/courseStatusController');
const router = express.Router();


router
    .route("/")
    .get(courseStatusController.get);

module.exports = router;
