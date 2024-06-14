const express=require("express");
const dbConnection = require("./mongodb");

const app=express();


//used for POST method
app.use(express.json());


//How to get data from API
app.get('/',async (req,res)=>{
  let data=await dbConnection();
  data=await data.find().toArray();
  res.send(data);
});

//NOTE->You cannot pass body to get method of API but you can pass query param through url



//POST method for adding data
//Go to Postman and select raw in body and set data as JSON format and then send the data
//To see the data in NODE JS simply do req.body

app.post('/',async (req,res)=>{
  console.log(req.body);
  //to make this data saved upon mongodb
  let data=await dbConnection();
  let result=await data.insertOne(req.body)
  res.send(req.body);

})


//PUT method for updating data



app.put('/',async (req,res)=>{
  console.log(req.body);

  let data=await dbConnection();
  let result=await data.updateOne(
    {name:"iphon-X"},
    {$set:req.body}
  )
})



//if we want to dynamically update data 
app.put('/:name',async (req,res)=>{
  console.log(req.body);

  let data=await dbConnection();
  let result=await data.updateOne(
    {name:req.params.name},
    {$set:req.body}
  )
})


//Delete method

const mongodb=require("mongodb"); //to convert id into object format

app.delete('/:id',async (req,res)=>{
  console.log(req.body);

  let data=await dbConnection();
  let result=await data.deleteOne(
    {_id:new mongodb.ObjectId(req.params.id)}
  )
})

app.listen(5000);
