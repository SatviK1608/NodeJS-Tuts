const express=require("express");
const app=express();



app.get('',(req,res)=>{
  res.send(`<h1>Welcome, to Home Page</h1>
  <a href="/about">Go To About</a>
  `);

});


app.get('/about',(req,res)=>{
  res.send(`
    <input type="text" placeholder="Username">
    <button>Click Me</button>
<br/>
  <a href="/">Go To Home</a>
  `);

});

app.get('/help',(req,res)=>{
  res.send(
    [
      {
        name:'satvik',
        email:"satvik1608"
      },
      {
        name:'madhav',
        email:"madhav99"
      }
    ]
  );
 
});

app.listen(5000);