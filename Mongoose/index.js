//mongoose helps us in defining schemas,prevent adding of some extra field,restriction on values etc which cannot be restricted using mongodb

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/learning");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  company: String,
});

//custom methods for filtering
productSchema.statics.findByName = function (name) {
  return this.find({ name: new RegExp(name) });
};

//custom query
productSchema.query.byName = function (name) {
  return this.find({ name: new RegExp(name) });
};

//creates a parameter which will not be saved as it's created dynamically at run-time AND to use we
//will just get data using some query and then do data.nameAndPrice to get results
productSchema.virtual("nameAndPrice").get(function () {
  return `${this.name} ${this.price}`;
});

const saveInDB = async () => {
  const Product = mongoose.model("nodetuts", productSchema);

  let data = new Product({
    name: "max 9000",
    price: 300,
    brand: "max",
    category: "Mobile",
  });
  const result = await data.save();
  console.log(result);
};
//saveInDB();

const updateInDB = async () => {
  const Product = mongoose.model("nodetuts", productSchema);
  let data = await Product.updateOne(
    { name: "max 9000" },
    {
      $set: { price: 400 },
    }
  );
  data.save();
};
//updateInDB();

const deleteInDB = async () => {
  const Product = mongoose.model("nodetuts", productSchema);
  let data = await Product.deleteOne({ name: "max 9000" });
};
//deleteInDB();

const findInDB = async () => {
  const Product = mongoose.model("nodetuts", productSchema);
  let data = await Product.find({});
  // data=await Product.find({price:"400"});
  // data=await Product.find({price:{$lt:"400"}})

  // data = await Product.findByName("m40");

  // data=await Product.find().byName("m40");

  console.log(data);
};
findInDB();
