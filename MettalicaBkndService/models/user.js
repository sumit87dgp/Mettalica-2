const moongoose = require('mongoose');
const userSchema = moongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  email: String,
  phoneNo: String
});

module.exports = moongoose.model('User', userSchema);
