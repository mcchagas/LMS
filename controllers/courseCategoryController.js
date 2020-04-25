const courseCategory = require('./../models/courseCategoryModel');


//POST - CREATE NEW CATEGORY
exports.post = async (req, res) => {
    try {
      
      const newCategory = await courseCategory.create(req.body);
  
      res.status(201).json({
        status: 'success including new course category type',
        data: {
          courseCategoryName: newCategory
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail including new course category type',
        message: err
      });
    }
  };


  //GET ALL Categories
  exports.get = async (req, res) => {
    try {
      
        const category = await courseCategory.find();
    
        res.status(201).json({
          status: 'success finding course categories',
          data: {
            category
          }
        });
      } catch (err) {
        res.status(400).json({
          status: 'fail finding course categories',
          message: err
        });
      }
};



  /*
exports.get = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "esta rota esta sendo construida - get do course category controller",
    });
};

exports.post = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "esta rota esta sendo construida - post do course category controller",
    });
};
*/
