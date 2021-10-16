const path = require('path');
const router = require('express').Router();
// Returns home page 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
}); 
// Returns the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
}); 
module.exports = router;