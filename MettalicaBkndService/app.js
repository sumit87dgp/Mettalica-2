const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
})

app.use('/api/trades', (req, res, next) => {
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
})

app.use((req, res, next) => {
  console.log('First Middleware');
  next();
});

app.use((req, res, next) => {
  res.send('This is the response');
});

module.exports = app;
