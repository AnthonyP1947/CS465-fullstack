const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const users = mongoose.model('users');

passport.use(new LocalStrategy(
    // tell passport which user property is used as the username
    { usernameField: 'email'},

    //provide passport a function to use for validating users
    async (username, password, done) => {
        try {
            const user = await users.findOne({ email: username});

            //If no user matches the e-mail, fail
            if(!user){
                return done(null, false, {message: 'Unrecognized username' });
            }

            //test the password
            if(!user.validatePassword(password)){
                return done(null, false, {message: 'Incorrect password' });
            }

            //everything passed, log them in
            return done(null, user);
        }
        catch(e){
            return done(e)
        }
    }
))