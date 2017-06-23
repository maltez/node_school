const config = require('./config/server.config');
const http = require('http');
const errorhandler = require('errorhandler');

const express = require('express');
const app = express();

// Routes import
const index = require('./routes/index.router');

const logger = require('./utilities/logger');
const clientErrorHandling = require('./middlewere/clientErrorHandler');

// Middleware register
app.use(logger);
app.use('/', index);
app.use(clientErrorHandling);

// Only use in development
if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler())
}

const server = http.createServer(app);

server.listen(config.port, config.host, () => {
    console.log(`Listen server on ${config.host}:${config.port}`);
});
