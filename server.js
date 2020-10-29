//Dependancies

console.log("hello world")
var express = require("express");
var fs = require("fs");
var path = require("path");

var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function(){
    console.log("Now listening on port: " + PORT)
})