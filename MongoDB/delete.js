const dbConnection=require("./mongodb");

const deleteData= async ()=>{
  let data=await dbConnection();
  let result=await data.deleteMany({name:'max pro 5'});
  if(result.deletedCount)
    console.log("Data deleted");
}

deleteData();