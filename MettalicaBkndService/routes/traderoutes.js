const express = require('express');
const TradeDetails = require('../models/trades');
const router = express.Router();


router.post('', (req, res, next) => {
  const trade = new TradeDetails({
    ofuser: req.body.userid,
    tradeDate: req.body.tradeDate,
    commodity: req.body.commodity,
    tradeside: req.body.tradeSide,
    quantity: req.body.quantity,
    price: req.body.price,
    counterparty: req.body.counterparty,
    location: req.body.location
  });
  trade.save().then(createdTrade => {
    res.status(201).json({
      message:'Trade created successfully',
      tradeDetails:{
        id:createdTrade._id,
        tradeDate:createdTrade.tradeDate,
        commodity:createdTrade.commodity,
        quantity:createdTrade.quantity,
        price:createdTrade.price,
        counterparty:createdTrade.counterparty,
        location:createdTrade.location
      }
    });
  }).catch((err) => {
    console.log('Error creating trade' + err);
  })
})


router.get('', (req, res, next) => {
  const trades = [{
      id: '32131-432423',
      tradeDate: new Date(),
      commodity: 'commodity1',
      tradeSide: 'buy',
      quantity: 2,
      price: 2132.5,
      counterparty: 'LA Metals',
      location: 'Los Angeles'
    },
    {
      id: '32131-432423',
      tradeDate: new Date(),
      commodity: 'commodity1',
      tradeSide: 'buy',
      quantity: 2,
      price: 2132.5,
      counterparty: 'LA Metals',
      location: 'Los Angeles'
    },
    {
      id: '32131-432423',
      tradeDate: new Date(),
      commodity: 'commodity1',
      tradeSide: 'buy',
      quantity: 2,
      price: 2132.5,
      counterparty: 'LA Metals',
      location: 'Los Angeles'
    },
    {
      id: '32131-432423',
      tradeDate: new Date(),
      commodity: 'commodity1',
      tradeSide: 'buy',
      quantity: 2,
      price: 2132.5,
      counterparty: 'LA Metals',
      location: 'Los Angeles'
    },
    {
      id: '32131-432423',
      tradeDate: new Date(),
      commodity: 'commodity1',
      tradeSide: 'buy',
      quantity: 2,
      price: 2132.5,
      counterparty: 'LA Metals',
      location: 'Los Angeles'
    },
    {
      id: '32131-432423',
      tradeDate: new Date(),
      commodity: 'commodity1',
      tradeSide: 'buy',
      quantity: 2,
      price: 2132.5,
      counterparty: 'LA Metals',
      location: 'Los Angeles'
    },
    {
      id: '32131-432423',
      tradeDate: new Date(),
      commodity: 'commodity1',
      tradeSide: 'buy',
      quantity: 2,
      price: 2132.5,
      counterparty: 'LA Metals',
      location: 'Los Angeles'
    },
    {
      id: '32131-432423',
      tradeDate: new Date(),
      commodity: 'commodity1',
      tradeSide: 'buy',
      quantity: 2,
      price: 2132.5,
      counterparty: 'LA Metals',
      location: 'Los Angeles'
    },
    {
      id: '32131-432423',
      tradeDate: new Date(),
      commodity: 'commodity1',
      tradeSide: 'buy',
      quantity: 2,
      price: 2132.5,
      counterparty: 'LA Metals',
      location: 'Los Angeles'
    }
  ];

  res.status(200).json({
    message: 'Trades fecthed successfully',
    tradelist: trades
  });
});

module.exports = router;

// app.use((req, res, next) => {
//   console.log('First Middleware');
//   next();
// });

// app.use((req, res, next) => {
//   res.send('This is the response');
// });
