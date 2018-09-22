const moongoose = require('mongoose');
const uniquevalidator=require('mongoose-unique-validator');
const userSchema = moongoose.Schema({
  id: {
    type: String,
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  passWord: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    default: Date.now
  }
});

userSchema.plugin(uniquevalidator);
module.exports = moongoose.model('User', userSchema);
