
const mongoose = require('mongoose');

const courseTypeSchema = new mongoose.Schema({
    courseTypeName: {
      type: String,
      require: [true, 'must have a course type name'],
      unique: true
    }
  });
  
  const courseType = mongoose.model('coursetypes', courseTypeSchema);
  module.exports = courseType;

  /*
   const testcourseType = new courseType ({
   courseTypeName: 'test MCH'
  });
  testcourseType.save();
  
  */