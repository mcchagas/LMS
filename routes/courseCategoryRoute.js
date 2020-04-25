const express = require("express");
const courseCategoryController = require('./../controllers/courseCategoryController');
const router = express.Router();


router
    .route("/")
    .get(courseCategoryController.get)
    .post(courseCategoryController.post);

module.exports = router;
