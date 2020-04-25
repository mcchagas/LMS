
const mongoose = require('mongoose');

const courseAreaSchema = new mongoose.Schema({
    courseAreaName: {
      type: String,
      require: [true, 'must have a course type name'],
      unique: true
    }
  });
  
  const courseArea = mongoose.model('courseareas', courseAreaSchema);
  module.exports = courseArea;
