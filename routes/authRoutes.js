const passport = require('passport');

module.exports = () => {
// first request 
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

// send code to server
app.get('/auth/google/callback', passport.authenticate('google'));
};