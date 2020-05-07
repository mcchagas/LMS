const courseClassification = require('./../models/courseClassificationModel');


//POST - CREATE NEW CLASSIFICATION
exports.post = async (req, res) => {
    try {
      
      const newClassification = await courseClassification.create(req.body);
  
      res.status(201).json({
        status: 'success including new course Classification',
        data: {
          courseClassificationName: newClassification
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail including new course Classification',
        message: err
      });
    }
  };


  //GET ALL Classifications
  exports.get = async (req, res) => {
    try {
      
        const classification = await courseClassification.find();
    
        res.status(201).json({
          status: 'success finding course Classification',
          data: {
            classification
          }
        });
      } catch (err) {
        res.status(400).json({
          status: 'fail finding course Classification',
          message: err
        });
      }
};
