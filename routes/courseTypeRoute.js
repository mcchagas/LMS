const express = require("express");
const router = express.Router();
const courseTypeController = require('./../controllers/courseTypeController');


router
    .route("/")
    .get(courseTypeController.get)
    .post(courseTypeController.post);

    /*router
    .route("/:id")
    .get(courseTypeController.get)
    .post(courseTypeController.patch)
    .delete(courseTypeControllerController.delete);
*/
   
module.exports = router;
