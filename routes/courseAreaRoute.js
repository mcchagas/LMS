const express = require("express");
const courseAreaController = require('./../controllers/courseAreaController');
const router = express.Router();


router
    .route("/")
    .get(courseAreaController.get)
    .post(courseAreaController.post);
    

router
    .route('/:id')
    .get(courseAreaController.getCourseAreaByID)
    .patch(courseAreaController.patch)
    .delete(courseAreaController.delete);
 
module.exports = router;
