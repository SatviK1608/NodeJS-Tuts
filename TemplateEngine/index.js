const express=require("express");
const path=require("path");
const app=express();

const publicPath=path.join(__dirname,'public');


app.set('view engine','ejs');


app.get('',(req,res)=>{
  res.sendFile(`${publicPath}/index.html`)
})

//ensure folder name must be views
app.get('/profile',(req,res)=>{
  const user={
    name:"satvik",
    email:"satvik1608",
    city:"Kalka"
  }
  //passing dynamic data
  res.render('profile',{user});
})


// * ensures that if any of the above route link doesn't matche it shows some error page made by developer
app.get('*',(req,res)=>{
  res.sendFile(`${publicPath}/error.html`)
})



app.listen(5000);