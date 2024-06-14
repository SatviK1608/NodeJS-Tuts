const express=require("express");
const path=require("path");
const app=express();

const publicPath=path.join(__dirname,'public');
console.log(publicPath);

app.use(express.static(publicPath));

app.listen(5000);

//go to browser and add /about.html to view about page

//to create root file .ie file to be displayed on opening keep html file name as index.html



