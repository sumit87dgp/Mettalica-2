const express = require('express');
const CountryModel = require('../models/countries');
const CommodityModel = require('../models/commodities');
const router = express.Router();


router.put('/comm', (req, res) => {
  const commodity = new CommodityModel({
    _id: req.body.id,
    abrvname: req.body.abrvname,
    commname: req.body.commname,
    price: req.body.price
  });
  CommodityModel.updateOne({
    _id: req.body.id
  }, commodity).then(result => {
    if (result.n > 0) {
      res.status(200).json({
        message: 'Commodity updated successfully',
        editedcommodity: commodity
      })
    } else {
      res.status(404).json({
        message: 'Not Found',
        editedcommodity: null
      });
    }
  })
});

router.put('/country', (req, res) => {
  const country = new CountryModel({
    _id: req.body.id,
    abbrvName: req.body.abbreviatedname,
    countryName: req.body.name
  });
  CountryModel.updateOne({
    _id: req.body.id
  }, country).then(result => {
    console.log(result);
    if (result.n > 0) {
      res.status(200).json({
        message: 'Country updated successfully',
        editedcountry: country
      });
    } else {
      res.status(404).json({
        message: 'Not Found',
        editedcountry: null
      });
    }
  }).catch(err => {
    res.status(500).json({
      message: 'Internal error occured',
      editedcountry: null
    });
  });
});

router.post('/comm', (req, res) => {
  const commodity = new CommodityModel({
    abrvname: req.body.abrvname,
    commname: req.body.name,
    price: req.body.priceperunit
  })
  commodity.save().then(createdcommodity => {
    res.status(201).json({
      message: 'commodity created successfully',
      newcommodity: createdcommodity
    });
  }).catch(err => {
    res.status(500).json({
      message: 'Internal server error',
      newcommodity: null
    });
  })
});

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
      message: 'new country added',
      newcountry: createdcountry
    });
  }).catch((err) => {
    console.log(err);
  });
});

router.get('/comm', (req, res) => {
  CommodityModel.find().then((data) => {
    res.status(200).json({
      message: 'Commodities fetched successfully',
      commoditylist: data
    })
  }, (err) => {
    res.status(501).json({
      message: 'Internal occur',
      commoditylist: null,
      error: err
    })
  }).catch(err => {
    res.status(501).json({
      message: 'Internal occur form catch',
      commoditylist: null,
      error: err
    })
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

router.delete('/comm/:id', (req, res)=> {
  CommodityModel.deleteOne({
    _id: req.params.id
  }).then(result => {
    if (result.n > 0) {
      // console.log(result);
      res.status(200).json({
        statuscode: 1,
        message: 'Commodity deleted successfully'
      });
    } else {
      // console.log(result);
      res.status(401).json({
        statuscode: 0,
        message: 'resource not found'
      });
    }
  })
})

module.exports = router;
