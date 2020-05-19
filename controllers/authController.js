const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');



exports.signup = async (req, res, next) =>{
try {

        //const newUser = await User.create(req.body); anterior sem seguranca / abaixo o novo codigo com os campos.
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            mobile: req.body.mobile
        });

        // creating the token here with my jwt secret env var.
        const token = jwt.sign({ id: newUser._id}, process.env.JWT_SECRET);
        //console.log(token);


        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        });
} catch (err) {
        res.status(400).json({
        status: 'fail signing up the new user',
        message: err
        });
    }
};

