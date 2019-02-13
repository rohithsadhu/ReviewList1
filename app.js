var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app=express();
const route = require('./routes/route');
const port = 3000;




//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/reviewlist');
mongoose.connection.on('connected',()=>{
    console.log('connected to data base mongodb@27017');
});
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('the error found is: '+err);
    }
 
});
app.use(bodyparser.json());

app.use('/api', route);
app.use(cors());
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));



app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.send('foobar');
});


app.listen(port,()=>{
    console.log('Server started at port:'+port);
});