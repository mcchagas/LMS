const courseClassification = require('./../models/courseClassificationModel');

exports.post = async (req, res) => {
    try {
      
      const newCourseC = await courseClassification.create(req.body);
  
      res.status(201).json({
        status: 'success including new course type',
        data: {
          courseClassificationName: newCourseC
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail including new course classification',
        message: err
      });
    }
  };


  exports.get = async (req, res) => {
    try {
      
      const CourseC = await courseClassification.find();
  
      res.status(201).json({
        status: 'success finding course classification',
        data: {
          CourseC
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail finding course classification',
        message: err
      });
    }
  };


exports.patch = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "esta rota esta sendo construida - patch do course classification controller",
    });
};

exports.del = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "esta rota esta sendo construida - del do course classification controller",
    });
};

