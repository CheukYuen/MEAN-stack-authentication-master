var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function (req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message": "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function (err, user) {
        res.status(200).json(user)
      });
  }

};


module.exports.profileUpdate = function (req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message": "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id, function (err, user) {
        console.log('req.payload: ', req.payload);
        console.log('req.body: ', req.body);
        console.log('user: ', user);
        console.log('user.name: ', user.name);
        console.log('req.body.name: ', req.body.name);
        user.name = req.body.name;
        console.log('user after: ', user);
        user.save();
        res.status(200).json(user);
      });
  }

};