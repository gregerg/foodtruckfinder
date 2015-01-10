// Dependencies
var express = require('express');
var bodyParser= require('body-parser');
var port = process.env.PORT || 3000;

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(port);
console.log('server running on port', port);
