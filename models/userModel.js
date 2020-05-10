const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name: {
      type: String,
      require: [true, 'The user must have a Name!'],
      unique: true
    },
    email: {
        type: String,
        require: [true, 'The user must have an e-mail.'],
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
        validate:{
            validator: function(el){
                return el === this.password;
            },
            message: 'passwords are not the same.'
        }
    },  
    mobile: {
        type: String,
        require: [true, 'the user must have a mobile number'],
        unique: false
    }
  });


  userSchema.pre('save', async function(next){
    if (!this.isModified('password')) return next();
        this.password = await bcrypt.hash(this.password, 12);
        this.passwordConfirm = undefined;
        next();
  });
  
  
  const users = mongoose.model('users', userSchema);
  module.exports = users;
