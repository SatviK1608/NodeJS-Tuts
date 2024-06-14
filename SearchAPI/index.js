const express=require("express");

require("./config");

const nodeTut=require("./nodetut");

const app=express();


app.use(express.json());//parse data to json


//in key we can anything that will match on regex
app.get("/search/:key",async(req,res)=>{
  let data=await nodeTut.find(

    {

      //$or tells to search in multiple fields
      "$or":[
        {"name":{$regex:req.params.key}},
        {"brand":{$regex:req.params.key}}
      ]
    }
  );
  res.send(data);
})





app.listen(5000);
