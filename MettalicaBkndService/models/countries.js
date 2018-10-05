const mongoose=require('mongoose');
const uniquevalidator=require('mongoose-unique-validator');
const countrySchema=mongoose.Schema({
  id:{
    type:String
  },
  abbrvName:{
    type:String,
    unique:true
  },
  countryName:{
    type:String,
    unique:true
  }
});

countrySchema.plugin(uniquevalidator);
module.exports=mongoose.model('Country',countrySchema);
