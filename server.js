const express = require("express");
const bodyParser = require("body-parser");
const url = 'mongodb://localhost:27017/MyDb';
const app = express();
const hostname = 'localhost';
const port = 3000
const mongo = require('mongodb');
const path = require('path');
var MongoClient = require('mongodb').MongoClient;
// const { assert } = require("console");
// const { json } = require("body-parser");
const http = require("http");





const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });  

// Body-parser middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())  


app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/about.html'));
});



app.get('/pets' ,(req,res) => {
    MongoClient.connect(url,function(err,db){
//   assert.equal(null,err);
     db.collection('pets').find({}).toArray(function(err, result){
    // res.json(JSON.stringify(result))
    console.log(result)
    res.json(result)
    db.close();
  });
  })
     
  })


app.post('/pets',(req,res) => {
   var item = {
       id : req.body.id, 
       name : req.body.name,
       age : req.body.age
    }
    MongoClient.connect(url,function(err,db){
     db.collection('pets').insertOne(item,function(err,result){
    //  assert.equal(null,err);
     console.log('Item inserted' + result);
     res.json(result)
     db.close();
     }) 
    })
})
  


    