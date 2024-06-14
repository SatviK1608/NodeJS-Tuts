const express=require("express");
const req = require("express/lib/request");
const app=express();

//making Application route middlewear - used to filter request aur hrr page p lgadeta haii
//bina next ke nhi chlega
const reqFilter=(req,res,next)=>{

  //agr hm ?age=x kuch nhi dalenge to ye if condition chlegi aur page load ni hoga dusra
  if(!req.query.age){
    res.send("please provide age")
  }
  else if(req.query.age<18){
    res.send("You cannot access this page");
  }
  else{
    next();
  }
  
}

app.use(reqFilter); //applies middleware to all pages


app.get('/',(req,res)=>{
  res.send("WELCOME to Home Page")
})
app.get('/users',(req,res)=>{
  res.send("WELCOME to Users Page")
})

app.listen(5000);