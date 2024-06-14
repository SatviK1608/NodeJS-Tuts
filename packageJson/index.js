/*
 package.json keeps code details of our project like name,version,description,license, and packages
*/ 

//To create write cmd in termial : npm init
//entry point specify which file will run first when server is started

//when we install modules first time a node modules folder is created which will contain all the modules and their helping modules. Along with it package-lock.json is also created which contains details of modules like version,resolve and integrity.

//to see the modules we can check the dependencies inside package.json

//agr ye pura project hm kisi aur ko de to use sari dependencies install krni pdhegi 

//package.json is the most important file

//to recover node_modules folder use command "npm install", but you must have package.json file as it is the one which helps in installing all modules

//we should not push node_modules folder to git . So to avoid it make a file ".gitignore" and write "/node_modules" inside it.


//eg module : npm i colors

const colors=require('colors');
console.log('package.json is the most important file'.black);



//Node js is single threaded i.e. runs one command at a time