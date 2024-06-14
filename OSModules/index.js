const os=require('os');



console.log(os.arch()); //bit os
console.log(os.freemem()/(1024*1024*1024)); //ram free in GB

console.log(os.totalmem()/(1024*1024*1024));  //total ram in GB

console.log(os.hostname());

console.log(os.platform()); //about os name

console.log(os.userInfo());


