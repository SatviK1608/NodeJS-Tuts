const mysql=require("mysql2");

const con=mysql.createConnection(
  {
    host:"localhost",
    user:"root",
    password:"Satvik@1608",
    database:"college"
  }
);


//to check if server gets connected or not
// con.connect((err)=>{
//   if(err){
//     console.log("error");
//   }
//   else{
//     console.log("connected");
//   }
// })

module.exports=con;

