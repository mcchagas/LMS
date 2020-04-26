const express = require("express");
const courseClassificationController = require('./../controllers/courseClassificationController');
const router = express.Router();


router
    .route("/")
    .get(courseClassificationController.get)
    .post(courseClassificationController.post);
    

router
    .route('/:id')
    .get(courseClassificationController.getCourseClassificationByID)
    .patch(courseClassificationController.patch)
    .delete(courseClassificationController.delete);
 
module.exports = router;
