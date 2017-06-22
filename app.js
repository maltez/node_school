const config = require('./config/server.config');
const http = require('http');
const express = require('express');
const app = express();

// Routes import
const index = require('./routes/index.router');

const logger = require('./utilities/logger');

// Middleware register
app.use(logger);

app.use('/index', express.static('public'));
app.use('/', index);


const server = http.createServer(app);

server.listen(config.port, config.host, () => {
    console.log(`Listen server on ${config.host}:${config.port}`);
});
