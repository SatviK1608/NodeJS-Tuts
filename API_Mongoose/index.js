const express=require("express");

require("./config");

const nodeTut=require("./nodetut");

const app=express();


app.use(express.json());//parse data to json

app.post("/create", async (req,res)=>{
  let data=new nodeTut(req.body);
  let result=await data.save();
  console.log(result);
  res.send(result);

})

app.get("/listen",async(req,res)=>{
  let data=await nodeTut.find();
  res.send(data);
})


// 6564311aa3032739336a78de

app.delete("/delete/:_id",async(req,res)=>{
  let data=await nodeTut.deleteOne(req.params);
  res.send(data);
})


app.put("/update/:_id",async(req,res)=>{
  let data=await nodeTut.updateOne(
    req.params,
    {
      $set:req.body
    }
  );
  res.send(data);
})








app.listen(5000);
