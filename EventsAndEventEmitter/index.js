const express=require("express");

const EventEmitter=require("events");

const app=express();


const event=new EventEmitter();

let count=0; //to count how many times api is called

//handles event
//first param : event name
//2nd param : callback func
event.on("countAPI",()=>{
  count++;
  console.log("event called "+count+" times");
})

app.get("/",async (req,res)=>{
  res.send("api called");
  event.emit("countAPI"); //generates event
})
app.get("/search",async (req,res)=>{
  res.send("search api called");
  event.emit("countAPI");
})
app.get("/update",async (req,res)=>{
  res.send("update api called");
  event.emit("countAPI");
})


app.listen(5000);

