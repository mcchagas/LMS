const mongoose = require('mongoose');

const courseCategorySchema = new mongoose.Schema({
    courseCategoryName: {
      type: String,
      require: [true, 'must have a course category name'],
      unique: true
    }
  });
  
  const courseCategory = mongoose.model('coursecategories', courseCategorySchema);
  module.exports = courseCategory;

