const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.signup = async (req, res, next) =>{

    try {

        //const newUser = await User.create(req.body); 
        // acima o codigo anterior sem seguranca pois acessa tudo inclusive a role
        //abaixo o novo codigo com os campos.
        
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            mobile: req.body.mobile
        });

        // creating the token here with my jwt secret env var.
        const token = jwt.sign({ 
            id: newUser._id }, 
            process.env.JWT_SECRET);

        res.status(201).json({
            status: 'success',
            data: {
                user: newUser}
        });

    } catch (err) {
        res.status(400).json({
        status: 'fail signing up the new user',
        message: err
        });
    }
};

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
  
    // 1) verify if the email and password exist - if no email // no passw 
    if (!email || !password) {
      return next(new AppError('Please provide email and password!', 400));
    }
    // 2) Check if user exists && password is correct
    const user = await User.findOne({ 
        email: email })
        .select('+password');  // {email neste caso eh o mesmo que email=email / field = var no EX6 tem esse atalho de so colocar email}
  
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError('Incorrect email or password', 401));
    }
  
    // 3) If everything ok, send token to client
    createSendToken(user, 200, req, res);
  });
  