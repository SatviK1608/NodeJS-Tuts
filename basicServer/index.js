const http=require('http'); //server ki request or response ko handle krne ke liye http module ka use hota hai



http.createServer((req,res)=>{
  res.write("<h1>Hello,this is SatviK</h1>");
  res.end();
}).listen(4500);

/*
Another way

  const fun=(req,res)=>{
    res.write("<h1>Hello,this is SatviK</h1>");
    res.end();
  }

  http.createServer(fun).listen(4500);

*/



//createServer() takes func as a parameter with two parameter for request and response

//output dekhne k liye file ko run krke browser pe localhost:4500 type kro

//NOTE->jb bhi kuch change krna ho to server ko firse restart krna pdhega mtlb file ko dubara run krna pdhega


