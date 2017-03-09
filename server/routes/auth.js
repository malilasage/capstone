module.exports = function(server, passport) {

  server.post('/login', passport.authenticate('local-login', {
    successRedirect : '/jobs',
    failureRedirect : '/landing',
    failureFlash : true
  }));

  server.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/jobs',
    failureRedirect : '/landing',
    failureFlash : true
  }));

  server.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/landing');
  });
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/landing');
};
