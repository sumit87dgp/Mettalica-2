const express = require('express');
const CountryModel = require('../models/countries');
const router = express.Router();

router.post('/country', (req, res) => {
  console.log(req);
  const country = new CountryModel({
    abbrvName: req.body.abbreviatedname,
    countryName: req.body.name
  });

  console.log(country);

  country.save().then(createdcountry => {
    console.log(createdcountry);
    res.status(201).json({
      message: 'new country added'
    });
  }).catch((err) => {
    console.log(err);
  });
});

router.get('/countries', (req, res) => {

  const countryQuery = CountryModel.find();
  countryQuery.then((data) => {
    res.status(200).json({
      message: 'Countries fetched successfully',
      countries: data
    })
  }, (err) => {
    res.status(501).json({
      message: 'Internal Error occured',
      countries: null
    })
  }).catch(() => {
    res.status(501).json({
      message: 'Internal Error occured',
      countries: null
    })
  });

  //countryQuery.then()
});

module.exports = router;