const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      require: [true, 'The user must have a Name!'],
      unique: true
    },
    email: {
        type: String,
        require: [true, 'The user must have E-mail!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please, provide a valid e-mail address!']
    },
    password: {
        type: String,
        require: [true, 'The user must have a password!'],
        minlength: 6
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
    },  

    mobile: {
        type: String,
        require: [true, 'The user must have a mobile number!'],
        unique: false
    }
  });
  
  const users = mongoose.model('users', userSchema);
  module.exports = users;
