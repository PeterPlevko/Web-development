let User = require('../models/user')
const { body,validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const passport = require('passport')


exports.signUp_get = function(req, res){
    res.render('sign-up-form');
}

exports.signUp_post = [
    //validate and sanitize all fields
    body('username', 'Username is required').trim().escape(),
    body('password', 'Password is required').trim().exists().escape(),
    body(
    'passwordConfirmation',
    'passwordConfirmation field must have the same value as the password field',
  )
    .exists()
    .custom((value, { req }) => value === req.body.password),
    async (req, res, next) => {
        const errors = validationResult(req);
        
        let user = new User ({
            username: req.body.username,
            password: req.body.password
        })
        user.password = await bcrypt.hash(user.password, 10)

        console.log(user.password)
        if(!errors.isEmpty()) {
            //there are errors, render form again with sanitazed values
            
            res.render('sign-up-form')
            console.log(errors)
            return
        } else {
            
            //Data from form is valid
            user.save(function(err) {
                
                if(err) { return next(err); }
                //Success
                res.redirect('/')
            })
        }
    }
]

exports.login_get = function(req, res) {
    res.render('login-form')
}

exports.login_post = passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login"
})

exports.logout_get = function(req,res){
    req.logout()
    res.redirect('/')
}


exports.become_admin_get = function(req, res) {
    res.render('become-admin')
}

exports.become_admin_post = function(req, res) {
    if (req.body.admin_password === 'admin'){
        console.log(req.user)
        User.findByIdAndUpdate(req.user.id, {$set: {isAdmin: true}}, function(err) {
            if (err) {return next(err)}
            //Success
            res.redirect('/')
        } )
    } else {
        res.render('become-admin')
    }  
}
    

