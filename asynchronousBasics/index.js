// console.log("start exe...");

// setTimeout(()=>{
//   console.log("logic exe...");
// },2000)

// console.log("complete exe...");


//Drawback of async is that if some updation take a time,than the output line will give result according to old values


//Therefor, to handle async data we use promises

//without promise output is 10
let a=10,b=0;
setTimeout(()=>{
  b=20;
},2000)
console.log(a+b);

//with promise output is 30
let x=10,y=0;
let waitingData=new Promise((resolve, reject) =>{
  setTimeout(()=>{
    resolve(20); //passing updating value
  },2000)
})

//ab ye wala function tb execute hoga jb uske resolve ko value miljayegi idhr 2sec baad execute hoga yeh wala aur data output krdega

waitingData.then((data)=>{ 
  y=data;
  console.log(x+y);
})
