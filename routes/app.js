var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('node');
});

// router.get('/message/:msg', (req, res, next) => {
//    res.render('node', {message: req.params.msg});
// });

router.post('/', (req, res, next) => {
   var email = req.body.email;
   var user = new User({
      firstName: 'Brent',
      lastName: 'Mercado',
      password: 'super-secret',
      email: email
   });
   // save to the database
   user.save();
   res.redirect('/');
});

module.exports = router;
