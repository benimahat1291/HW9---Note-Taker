//Dependancies
console.log("hello world")
var express = require("express");
var fs = require("fs");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;//create a name for our path and link to public folder
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
    var notesApi = JSON.parse(fs.readFileSync("./db/db.json","utf8"));
    //console.log(notesApi);
    // save the new entry as a varible 
    var noteEntry = req.body;
    //console.log(noteEntry);
    // use the length of the notesApi to increment the idValue
    var idValue = (notesApi.length).toString();
    //console.log(idValue)
    //set the id property of noteEntry as the next highest value
    noteEntry.id = idValue;
    //add the new entry to notesApi
    notesApi.push(noteEntry);
    //write notesApi as a string to our database
    fs.writeFileSync("./db/db.json", JSON.stringify(notesApi));
    console.log("notes saved to DB")
    //send our api as a json response
    res.json(notesApi)
})

app.delete("/api/notes/:id", function(req, res){
    //read and save the data as variable and parse into a obj value
    var notesApi = JSON.parse(fs.readFileSync("./db/db.json","utf8"));
    //grab and gave the value for id of selected note
    var noteIdValue = req.params.id;
    //this is used to set 
    var increment = 0;
    //console.log(noteIdValue);
    //filter and return noteApi 
    notesApi = notesApi.filter(thisNote => {
    //return back all values that do not have selected noteIdValue
        return thisNote.id != noteIdValue;
    })
    //console.log(notesApi);
    //loop though notesApi and increment the ids values
    for (thisNote of notesApi){
        thisNote.id = increment.toString();
        increment++;
    }
    //write notesApi as a string to our database
    fs.writeFileSync("./db/db.json", JSON.stringify(notesApi));
    //send our api as a json response
    res.json(notesApi);
})


//port listsening to sever at port 8080
app.listen(PORT, function(){
    console.log("Now listening on port: " + PORT)
});