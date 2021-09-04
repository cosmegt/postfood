var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send("you have reached food")
  })

  module.exports = router;