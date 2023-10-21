//step 1 - create a folder
//step 2 - move into the folder
//step 3 - npm init -y
//step 4 - open folder using VSCode
//step 5 - npm i express
//step 6 - create server.js

//Server Instantiate
const express = require('express');
const app = express();

//activate the server on 3000 port
app.listen(3000,()=>{
  console.log("server started at port no. 3000");
});

//used to parse  req.body in express->Put or Post
const bodyParser=require('body-parser');
app.use(bodyParser.json);
//specifically parse json data & add it to the request.body object
//creating our route
//jabhi tum '/' es route mai aaoge to response mai hello wala send kar denge.

//Routes
app.get('/',(request,response)=>{
  response.send("hello Jee,kaise ho saare");
});

app.post('/api/cars',(request,response)=>{
  const {name, brand}=request.body;
  console.log(name);
  console.log(brand);
  response.send("Car Submitted Successfully.");
});

//now how to connect server and database for this we use mongoose--ODM Library basically nodejs mai data ko object ke tarah treat kar rhe ho aur mongodb mai data ko document ke tarah treat kar rhe ho to inke beech ke mapping ko sambhlna ODM library karta hai--object data modelling .

//revise promises in javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
  useNewurlParser:true,
  useUnifiedTopology:true
})
.then(()=>{console.log("connection Successful")})
.catch( (error)=>{console.log("Received an error")})