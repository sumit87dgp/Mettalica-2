const mongoose=require('mongoose');
const uniquevalidator=require('mongoose-unique-validator');
const commSchema=mongoose.Schema({
  id:{
    type:String
  },
  abrvname:{
    type:String,
    unique:true
  },
  commname:{
    type:String,
    unique:true
  },
  price:{
    type:Number
  }
})

commSchema.plugin(uniquevalidator);
module.exports=mongoose.model('Commodity',commSchema);
