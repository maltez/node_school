const config = require('./config/server.config');
const http = require('http');
const morgan = require('morgan');
const app = require('express')();

// Routes import
const index = require('./routes/index.router');

// Middleware register
app.use(morgan('tiny'));

app.use('/', index);

const server = http.createServer(app);

server.listen(config.port, config.host, () => {
    console.log(`Listen server on ${config.host}:${config.port}`);
});
