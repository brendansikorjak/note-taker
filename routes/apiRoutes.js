const fs = require('fs');
const path = require('path');

const router = require('express').Router();

// Read notes from db.json
router.get('/api/notes', (req, res) => {
  const notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/db.json'))
  );
  res.json(notes);
});

// Save a new note
router.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/db.json'))
  );

  // Generate a unique ID for the new note (you can use a library like uuid)
  newNote.id = Math.random().toString(36).substr(2, 9);

  // Push the new note to the array
  notes.push(newNote);

  // Write the updated notes array back to db.json
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes)
  );

  res.json(newNote);
});

module.exports = router;
