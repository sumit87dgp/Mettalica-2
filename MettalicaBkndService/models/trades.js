const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose, 2);
const tradeSchema = mongoose.Schema({
  id: {
    type: String
  },
  ofuser: {
    type: String
  },
  tradeDate: {
    type: Date,
    default: Date.now
  },
  commodity: {
    type: String,
    required: true
  },
  tradeside: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Float,
    required: true
  },
  counterparty: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Trades', tradeSchema);
