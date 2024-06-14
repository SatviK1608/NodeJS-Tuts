

//Read Data
const dbConnection=require('./mongodb')
const main=async()=>{
  let data=await dbConnection();
  data=await data.find().toArray();

  // data=await data.find({name:'f4}).toArray(); is used to get specified data
  
  console.warn(data);
}
main();

