const mongoose = require('mongoose');

const courseClassificationSchema = new mongoose.Schema({
    courseClassificationName: {
      type: String,
      require: [true, 'must have a course classification name'],
      unique: true
    }
  });
  
  const courseClassification = mongoose.model('courseclassifications', courseClassificationSchema);
  module.exports = courseClassification;

