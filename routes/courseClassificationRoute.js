const express = require("express");
const courseClassificationController = require('./../controllers/courseClassificationController');
const router = express.Router();


router
    .route("/")
    .get(courseClassificationController.get)
    .post(courseClassificationController.post);

    
module.exports = router;
