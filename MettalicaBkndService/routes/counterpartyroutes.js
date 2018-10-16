const express = require('express');
const CtrPartyModel = require('../models/counterparty');
const router = express.Router();

router.get('/', (req, res) => {
  const ctrparties = CtrPartyModel.find();
  ctrparties.then((data) => {
    res.status(200).json({
      message: 'Counter Parties fetched',
      ctrparties: data
    })
  }, (err) => {
    res.status(501).json({
      message: 'Internal Server error',
      ctrparties: null
    })
  }).catch(theerr => {
    res.status(501).json({
      message: 'Internal Server error',
      ctrparties: null
    })
  });
})

router.post('/', (req, res) => {
  const counterparty = new CtrPartyModel({
    name: req.body.name,
    abrvname: req.body.abrvname,
    location: req.body.location
  })

  counterparty.save().then((createdctrparty) => {
    res.status(200).json({
      message: 'New Counter party created',
      ctrparty: createdctrparty
    }, (err) => {
      res.status(501).json({
        message: 'Error occured in creating new Counterparty',
        ctrparty: null
      })
    })
  }).catch(err => {
    res.status(501).json({
      message: 'Error occured in creating new Counterparty',
      ctrparty: null
    })
  })
})

module.exports = router;
