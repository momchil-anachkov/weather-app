(function (){
  'use strict';
  
  var express = require('express');
  var request = require('request');
  var config = require('./config.js');
  var app = express();
  
  /**
   * Set static file location.
   */
  app.use(express.static(__dirname + '/public'));

  /**
   * Root URL: Serves the initial application
   */
  app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
  });
  
  /**
   * Api method used to get the forecast for a given place.
   */
  app.get('/api/forecast/:city', function (req, res) {
    request('http://api.apixu.com/v1/forecast.json?key=' + config.apiKey + '&days=2&q=' + req.params.city, function(err, response, body) {
      if (!err) {
        var bodyObj = JSON.parse(body);
        if (bodyObj.error) {
          res.status(404);
          res.send('Could not find the city you entered.');
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.send(body);
        }
      } else {
        res.status(500);
        res.send('Internal Server Error');
      }
    });
  });
  
  /**
   * Start the server
   */
  app.listen(parseInt(config.port), function () {
    console.log('Server is up and listening on port ' + config.port);
  });
}());
