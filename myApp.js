
require('dotenv').config();

var express = require('express');
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
