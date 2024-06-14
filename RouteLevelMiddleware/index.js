const express=require("express");
const req = require("express/lib/request");
const app=express();

//making route for specific page and in some other file

const reqFilter=require('./middleware');



app.get('/',(req,res)=>{
  res.send("WELCOME to Home Page")
})
app.get('/users',reqFilter,(req,res)=>{
  res.send("WELCOME to Users Page")
})
app.get('/about',(req,res)=>{
  res.send("WELCOME to About Page")
})

app.listen(5000);