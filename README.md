# Express: Note Taker

## Description

This application can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.
## Direction
* front-end was provided
* GET /notes - Should return the notes.html file.
* GET * - Should return the index.html file
* Include Database
* GET /api/notes - Should read the db.json file and return all saved notes as JSON.
* POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
* DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.


## code flow
 * require needed packages and express parsing 
 * Set server to litsen to port
 * create routes to the htmls to litsen to html
 * create a post route that will write to database
 * create a delete route that will filter though idvlaues

## technologies used
* Node.js
* nodemon
* path
* express

## Directory Files
* db
  >db.json
* node_modules (npm install from package manager)
* public
  >assets
    >css
      >styles.css
    >js
      >index.js
  >index.html
  >notes.hntl
* package-lock.json (npm install from package manager)
* package.json
* server.js
* README.md

## deployment directions
* run "npm run install" in bash terminal to get package-lock.json and node_modules
* run "npm init -y" and "npm run watch" activate local host
* In your browser go to http://localhost:3000/

## Chalanges
* Learn how to deploy local host
* Learning how to use path the link webpages
* using routes to comunicate front and back end
* Deleting using filter to remove from obj

## Developer

Beni Mahat 10/25/2020