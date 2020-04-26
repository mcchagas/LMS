const courseType = require('./../models/courseTypeModel');

exports.post = async (req, res) => {
    try {
      
      const newCourseType = await courseType.create(req.body);
  
      res.status(201).json({
        status: 'success including new course type',
        data: {
          courseTypeName: newCourseType
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail including new course type',
        message: err
      });
    }
  };


  exports.get = async (req, res) => {
    try {
      
      console.log(req.query);
      
      const CourseType = await courseType.find();
  
      res.status(201).json({
        status: 'success finding course type',
        data: {
          CourseType
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail finding course type',
        message: err
      });
    }
  };


exports.patch = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "esta rota esta sendo construida - patch do course type controller",
    });
};

exports.del = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "esta rota esta sendo construida - del do course type controller",
    });
};

