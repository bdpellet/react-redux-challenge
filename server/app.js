var express = require('express');
var path = require('path');

var app = express();

app.use('/', express.static(path.resolve(__dirname, '../build')));

app.use('/*', function (req, res) {
  res.redirect('/');
});

module.exports = app;
