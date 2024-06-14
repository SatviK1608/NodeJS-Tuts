const express=require("express");
const app=express();



app.get('',(req,res)=>{
  let data=req.query; //contains data req by browser
  //here in url we type ?key=value 
  res.send(`Hello, this is Home Page of ${data.name}`);

});


app.get('/about',(req,res)=>{
  res.send("<h1>Hello, this is About Page</h1>");

});

app.listen(5000);