const moongoose = require('mongoose');
const userSchema = moongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type:String,
    required:true
  },
  email: {
    type:String,
    required:true
  },
  passWord:{
    type:String,
    required:true
  },
  phoneNo: {
    type:String,
    required:true
  },
  dob:{
    type:Date,
    default:Date.now
  }
});

module.exports = moongoose.model('User', userSchema);
