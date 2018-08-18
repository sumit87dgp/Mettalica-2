const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('', (req, res, next) => {

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    passWord: req.body.passWord,
    email: req.body.email,
    phoneNo: req.body.phoneNo,

  });
  user.save().then(createduser => {
    res.status(201).json({
      message: "new user created"
    });
  }).catch((err)=>{
    console.log(err);
  });
});

module.exports = router;
