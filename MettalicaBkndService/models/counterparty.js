const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');
const counterpartySchema = mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  abrvname: {
    type: String,
    unique: true
  },
  location: {
    type: String
  }
})
counterpartySchema.plugin(uniquevalidator);
module.exports=mongoose.model('CtrPartySchema',counterpartySchema);
