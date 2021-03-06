
require('dotenv').config();
let bodyParser = require('body-parser');

var express = require('express');
const res = require('express/lib/response');
var app = express();

//console.log("Hello World");
app.use(bodyParser.urlencoded({extended : false}));

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
    res.json({"echo":word});
});

app.get("/name",(req,res)=> {
    const {first,last} = req.query;
    res.json({"name": first + " " + last});
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

});

app.post("/name",(req,res)=> {
    const {first,last} = req.body;
    res.json({"name": first + " " + last});
});





























 module.exports = app;
