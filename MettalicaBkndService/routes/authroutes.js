const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res, body) => {
  let fetchedUser;
  User.findOne({
    email = req.body.emailId
  }).then(user => {
    if (!user) {
      return res.status(401).json({
        message: 'Auth failed'
      })
    }
    fetchedUser = user;
    return bcrypt.compare(req.body.password, user.password);
  }).then(result => {
    if (!result) {
      return res.status(401).json({
        message: 'Auth failed'
      })
    }

    const token=jwt.sign({
      email:fetchedUser.emailId,
      userId:fetchedUser._id
    },'Metallica_2_dev',{
      expiresIn:'2h'
    });

    res.status(200).json({
      token:token,
      expiresIn:7200,
      userId:fetchedUser._id
    });
  }).catch(err=>{
    return res.status(401).json({
      message: 'Invalid User Credentials'
    })
  })
})
