const express=require("express");

const app=express();

const con=require("./config")

app.use(express.json());

app.get("/",(req,res)=>{

  con.query("select * from student",(err,result)=>{
    if(err){
      res.send("error")
    }
    else{
      res.send(result);
    }
  })

})


app.post("/", (req,res)=>{

  //static data
  const data={
    "roll_no": 120,
    "name": "harshit",
    "marks": 100,
    "grade": "A",
    "city": "zirakpur"
  }

  //dynamic data through postman
  /*
    {
        "roll_no": 130,
        "name": "dixit",
        "marks": 1,
        "grade": "F",
        "city": "kalka"
    }
  */ 
  const data2=req.body;
  con.query("insert into student set ?",data2,(err,result,fields)=>{
    if(err){
      throw err;
    }
    else{
      res.send(result);
    }
  })
})


app.put("/",(req,res)=>{

  //static data
  const data=["satvik dixit",70,"D",130];

  
  con.query("update student set name=?, marks=? , grade=? where roll_no=?",data, (err,result,fields)=>{
    if(err){
      throw err;
    }
    else{
      res.send(result);
    }
  })

})


app.put("/:id",(req,res)=>{

  //dynamic data
  /*
  {
        "name": "sandeep dixit",
        "marks": 90,
        "grade": "A"
  }
  */
  const data=[req.body.name,req.body.marks,req.body.grade,req.params.id];

  
  con.query("update student set name=?, marks=? , grade=? where roll_no=?",data, (err,result,fields)=>{
    if(err){
      throw err;
    }
    else{
      res.send(result);
    }
  })

})


app.delete("/:id",(req,res)=>{
  // res.send(req.params.id)

  con.query("delete from student where roll_no ="+req.params.id,(err,result,fields)=>{
    if(err)
      throw err;
    else
      res.send(result);
  })
})

app.listen(5000);