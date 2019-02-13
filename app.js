var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app=express();

const port = 3000;


const route = require('./routes/route');

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
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', route);
app.get('/',(req,res)=>{
    res.send('foobar');
});


app.listen(port,()=>{
    console.log('Server started at port:'+port);
});