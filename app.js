const config = require('./config/server.config');
const http = require('http');
const app = require('express')();
const cookieParser = require('cookie-parser');

// Routes import
const index = require('./routes/index.router');

const logger = require('./utilities/logger');

app.use(cookieParser());

// Middleware register
app.use(logger);

// Middleware for testing cookie-parser
app.use((req, res, next)=> {
    console.log('Cookies: ', req.cookies);
    next();
});

app.use('/', index);


const server = http.createServer(app);

server.listen(config.port, config.host, () => {
    console.log(`Listen server on ${config.host}:${config.port}`);
});
