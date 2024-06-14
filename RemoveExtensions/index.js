const express=require("express");
const path=require("path");
const app=express();

const publicPath=path.join(__dirname,'public');
console.log(publicPath);


//below method help us in removing extentions like .html and all from writing in browser and also helps us to load any html file on any name we write in browser
app.get('',(req,res)=>{
  res.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(req,res)=>{
  res.sendFile(`${publicPath}/about.html`)
})


// * ensures that if any of the above route link doesn't matche it shows some error page made by developer
app.get('*',(req,res)=>{
  res.sendFile(`${publicPath}/error.html`)
})



app.listen(5000);