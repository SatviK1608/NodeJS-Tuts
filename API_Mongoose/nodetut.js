const mongoose=require("mongoose");

const schema=new mongoose.Schema({
  name:String,
  brand:String,
  price:Number,
  category:String
});


module.exports = mongoose.model('nodetut',schema)