var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../' ,'client', 'todo', 'build', 'index.html'));
});

router.get('/cos', function(req, res) {
  res.send('Hejo :D')
});

module.exports = router;
