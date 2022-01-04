
require('dotenv').config();

var express = require('express');
const res = require('express/lib/response');
var app = express();

//console.log("Hello World");

app.use((req,res,next)=> {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/",(req,res)=> {
    //res.send("Hello Express");

    res.sendFile(__dirname + "/views/index.html");

});

app.get("/:word/echo",(req,res)=> {
    var word = req.params.word;
    res.json(word);
});

app.get('/now',(req,res,next)=> {
        req.time = new Date().toString();
        next();
    },(req,res) => {
        res.send({time : req.time});
    });

app.use(express.static(__dirname + "/public"));

app.use("/public",express.static(__dirname + "/public"));


app.get("/json",(req,res)=> {

    if (process.env.MESSAGE_STYLE === "uppercase" ) {
        res.json({"message": "HELLO JSON"});
    }
    else {
        res.json({"message": "Hello json"});
    }

})





























 module.exports = app;
