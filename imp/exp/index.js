// import {x} from './app'  -- not used by node as it has older version of js

const app=require('./app');  //import


console.log(app);
console.log(app.x);
console.log(app["y"]);
console.log(app.z());


const arr=[2,4,7,1,3,8,3];

let result=arr.filter((item)=>{
  return item>=3;
})
console.log(result);