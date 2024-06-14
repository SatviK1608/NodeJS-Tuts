const fs=require("fs");

//path module helps us in creating multiple files and inside some other folder

const path=require('path');
const dirpath=path.join(__dirname,'files');
//__dirname returns the path of working directory and by using join method we can get path of some other diretory present isnide current working directory


// for(let i=0;i<5;i++){
//   fs.writeFileSync(`${dirpath}/hello${i}.txt`,"a simple text file");
// }



//to display all files inside a dir
fs.readdir(dirpath,(err,files)=>{
  files.forEach((items)=>{
    console.log(items);
  });
});


//we cannpot get any data beyond our environment i.e. getting data of C drive or D drive is not possible
