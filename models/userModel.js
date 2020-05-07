const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    Name: {
      type: String,
      require: [true, 'The user must have a Name!'],
      unique: true
    },
    EMail: {
        type: String,
        require: [true, 'The user must have E-mail!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please, provide a valid e-mail address!']
    },
    Password: {
        type: String,
        require: [true, 'The user must have a password!'],
        minlength: 6
    },
    Mobile: {
        type: String,
        require: [true, 'The user must have a mobile number!'],
        unique: false
    }
  });
  
  const users = mongoose.model('users', userSchema);
  module.exports = users;
