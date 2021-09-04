var express = require('express'),
    router = express.Router();

var foodRoutes      = require('./food/food');
var wellnessRoutes  = require('./wellness/wellness');

router
  // Add a binding to handle '/api'
  .get('/', function(){
    // render the /tests view
  })
  .use('/food', foodRoutes)
  .use('/wellness', wellnessRoutes)
 
module.exports = router;