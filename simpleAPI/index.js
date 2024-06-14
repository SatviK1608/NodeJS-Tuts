const http=require("http");

// http.createServer((req,res)=>{

//   res.writeHead(200,{'Content-Type': 'application/json'});

//   res.write(JSON.stringify({
//     name:"Satvik",
//     email:"satvik1608@gmail.com"
//   }));

//   res.end();

// }).listen(5000)


const data=require("./data")
http.createServer((req,res)=>{

  res.writeHead(200,{'Content-Type': 'application/json'});

  res.write(JSON.stringify(data));

  res.end();

}).listen(5000)