
const fs=require('fs');

fs.writeFileSync("hello.txt","kuch aur bhi likh dalo")
//this will create new file and add content to it  if not present, else overwrites the content

const fs1=require('fs').writeFileSync;  //import only the specified method
fs1("hi.txt","sirf writeFileSync ko import kra hai");
