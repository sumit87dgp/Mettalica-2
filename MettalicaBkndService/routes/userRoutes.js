const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('', (req, res, next) => {
  bcrypt.hash(req.body.passWord, 10).then(hash => {

    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      passWord: hash,
      email: req.body.email,
      phoneNo: req.body.phoneNo,

    });
    user.save().then(createduser => {
      console.log(createduser);
      res.status(201).json({
        message: "new user created"
      });
    }).catch((err) => {
      console.log(err);
    });

  });

});

module.exports = router;
