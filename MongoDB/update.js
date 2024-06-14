
const dbConnection=require('./mongodb');

const update=async()=>{
  let data=await dbConnection();
  let result=await data.updateOne(
    {name:'note 5'},{
      $set: {name:'max pro 5',price:75}
    }
  );
  if(result.modifiedCount)
  console.log("updated successfully");
}
update();