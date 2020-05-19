const courseArea = require('./../models/courseArea');

// POST - NEW AREA
exports.post = async (req, res) => {
    try {
      
      const newArea = await courseArea.create(req.body);
        
      res.status(201).json({
        status: 'success including new course area',
        data: {
          courseAreaName: newArea
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail including new course area',
        message: err
      });
    }
  };


  //GET ALL AREAS
exports.get = async (req, res) => {
    try {
      
        const Area = await courseArea.find();
    
        res.status(201).json({
          status: 'success finding course areas',
          data: {
            Area
          }
        });
      } catch (err) {
        res.status(400).json({
          status: 'fail finding course areas',
          message: err
        });
      }
};



  //GET AREAS by ID
  exports.getCourseAreaByID = async (req, res) => {
    try {
      
        const AreabyID = await courseArea.findById(req.params.id);
    
        res.status(201).json({
          status: 'success finding course area by ID',
          data: {
            AreabyID
          }
        });
      } catch (err) {
        res.status(400).json({
          status: 'fail finding course area by ID',
          message: err
        });
      }
};


//PATCH AREA (UPDATE) by ID
exports.patch = async (req, res) => {
  try {
    
      const AreaUpdatebyID = await courseArea.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
  
      res.status(201).json({
        status: 'success finding and updating course area by ID',
        data: {
          AreaUpdatebyID
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail finding and updating course area by ID',
        message: err
      });
    }
};

// course area delete
exports.delete = async (req, res) => {
  try {
    await courseArea.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail delete',
      message: err
    });
  }
};