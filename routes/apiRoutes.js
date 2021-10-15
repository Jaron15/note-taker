const router = require('express').Router();
let notes = require('../db/db.json')
const fs = require('fs');
const path = require('path')

router.get('/notes', (req, res) => {
   res.json(notes)
})

router.post('/notes', (req, res) => {
   let noteArray = notes;

   req.body.id = randomId();
   noteArray.push(req.body)
   console.log(noteArray);
   res.json(noteArray);
   

   function randomId() {
      let id = "";
      let charArr = "qwertyuiopasdfghjklzxcvbnm0987654321".split("");
   
      for (let i = 0; i < 8; i++) {
        let randomIdx = Math.floor(Math.random() * charArr.length);
        id += charArr[randomIdx];
      }
   
      return id;
   }

   fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteArray));
 });

 router.delete('/notes/:id', (req, res) => {
   let noteArray = notes;

   let noteId = req.params.id;
   noteArray = noteArray.filter(note => note.id !== noteId);
   console.log(noteArray);

   notes = noteArray;

   fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteArray));
   res.json(noteArray);
 })

module.exports = router;