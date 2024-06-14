const fs=require("fs");

const path=require("path");

const dirpath=path.join(__dirname,'crud')
const filepath=`${dirpath}/apple.txt`;


//Create
  fs.writeFileSync(filepath,"apple ka iphone 15 launch hogya hai")

//Read
  //This returns buffer code
    fs.readFile(filepath,(err,data)=>{
      console.log(data);
    })
  //to get data pass another param utf8
    fs.readFile(filepath,'utf8',(err,data)=>{
      console.log(data);
    }) 

//Update
  //Append
    fs.appendFile(filepath,'iphone 15 ke 3 variants hai',(err)=>{
      if(!err) console.log("File is update")
    })
  
//Rename
  fs.rename(filepath,`${dirpath}/phone.txt`,(err)=>{
    if(!err) console.log("File is rename")
  }) 

//Delete
  //fs.unlinkSync(`${dirpath}/phone.txt`)  

