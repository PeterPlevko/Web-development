const LocalStrategy = require("passport-local").Strategy;
let bcrypt = require('bcryptjs')
const passport = require('passport')
let User = require('../models/user')

const customFields = {
    usernameField: 'uname',
    passwordField: 'pw'
}

const verifyCallback = (username, password, done) => {
    
    User.findOne({
        username: username
    }, (err, user) => {
        if (err) {
            
            return done(err);
        }
        if (!user) {
            
            return done(null, false, {
                message: "Incorrect username"
            });
        }
        bcrypt.compare(password, user.password, function(err, result) {
            if (result ) {
                console.log('uspeh')
                return done(null, user)
            }
            if (err) {
                
                return done(null, false, { message: 'Incorrect password'})
            } else {
                console.log('password')
                return done(null, false, { message: 'smth went wrong'})
            }
        });
        
        // return done(null, user);
    });
}

const strategy = new LocalStrategy(verifyCallback)

passport.use(strategy);
  
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
  