var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.download(path.join(__dirname, 'txt/release_notes_2019-11-14.txt'), function (err) {
    console.log(err);
  });
});


module.exports = router;
