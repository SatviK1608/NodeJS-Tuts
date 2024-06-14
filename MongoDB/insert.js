const dbConnection=require('./mongodb')

const insert= async ()=>{

  const db=await dbConnection();
  const result= await db.insertMany([
    {name:"note 5",brand:"vivo",price:50,category:'mobile'}
  ]
  )
  if(result.acknowledged){
    console.log("data inserted");
  }
  
}
insert();