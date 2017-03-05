const EXPRESS = require('express');
const PATH = require('path');
const HTTP = require('http');
const BODYPARSER = require('body-parser');

const FAVICON = require('serve-favicon');
const LOGGER = require('morgan');
const COOKIE_PARSER = require('cookie-parser');
const MONGOOSE = require('mongoose');

// Get our API routes
const app = require('./server/routes/app');
//Más APis aqui

const APP = EXPRESS();

//This isn't a safe connection. TO-DO: investigate safe connections to onCloud Mongo Services
MONGOOSE.connect('mongodb://test-user:testpw@ds135039.mlab.com:35039/angular2-deployment');

// view engine setup
// APP.set('views', PATH.join(__dirname, 'src'));
// APP.set('view engine', 'hbs');


//LOGGER
APP.use(LOGGER('dev'));

// Parsers for POST data
APP.use(BODYPARSER.json());
APP.use(BODYPARSER.urlencoded({ extended: false }));
APP.use(COOKIE_PARSER());


// Point static path to dist
APP.use(EXPRESS.static(PATH.join(__dirname, 'dist')));

APP.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

// Set our api routes
// APP.use('/app', app);

// Catch all other routes and return the index file
APP.get('*', (req, res) => {
  res.sendFile(PATH.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
APP.set('port', port);

/**
 * Create HTTP server.
 */
const server = HTTP.createServer(APP);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));