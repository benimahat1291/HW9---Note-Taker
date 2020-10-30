//Dependancies
console.log("hello world")
var express = require("express");
var fs = require("fs");
var path = require("path");

var app = express();
var PORT = 8080;
//create a name for our path and link to public folder
var pathName = path.join(__dirname, "/public");

// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//attach /notes to pathName and send the notes.html page
app.get("/notes", function(req, res){
    res.sendFile(path.join(pathName,"notes.html"));
});
//attach /api/notes to pathName and send contents of the db
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});
//post route to send info to index.js
app.post("/api/notes", function(req, res){
    //read and save the data as variable and parse into a obj value
    var notesObj = JSON.parse(fs.readFileSync("./db/db.json","utf8"));
    //console.log(notesObj);
    // save the new entry as a varible 
    var noteEntry = req.body;
    //console.log(noteEntry);
    var uniqueID = (notesObj.length).toString();
    console.log(uniqueID)
    noteEntry.id = uniqueID;
    notesObj.push(noteEntry);
 
    fs.writeFileSync("./db/db.json", JSON.stringify(notesObj));
    console.log("notes saved to DB")
    res.json(notesObj)
})

//port listsening to sever at port 8080
app.listen(PORT, function(){
    console.log("Now listening on port: " + PORT)
});