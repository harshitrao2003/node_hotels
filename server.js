// var fs = require("fs");
// var os = require("os");

// const { json } = require("express");

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile("greating.txt","hi"+user.username+"!\n",()=>{
//     console.log("file is created");
// });


// const notes = require("./notes.js");
// var _ = require('lodash');

// var age = notes.age;
// var result = notes.addNumber(age+23,5);
// console.log(age);
// console.log(result);


// var  data = ["harshit","ankita",1,2,1,5,3,2,"age"];
// var filter = _.uniq(data);
// console.log(filter);


// const jsonString ='{"name":"john","age":25}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);

// const objectToConvert = {
//     name : "alice",
//     age : 25
// };
// const jsonStringified = JSON.stringify(objectToConvert);
// console.log(jsonStringified);



const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send('welcome to our hotel....');
});

//import router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(PORT,()=>{
    console.log('server run');
});

