const config = require('./config/server.config');
const http = require('http');
const app = require('express')();

// Routes import
const index = require('./routes/index.router');
const planets = require('./routes/planets.router');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('./db/connection.db');

const logger = require('./utilities/logger');

// Middleware register
app.use(logger);

app.use('/base', index);
app.use('/planet', planets);

app.use(session({
  store: new MongoStore({ mongooseConnection: mongoose.connection })
 }));

const server = http.createServer(app);

server.listen(config.port, config.host, () => {
    console.log(`Listen server on ${config.host}:${config.port}`);
});
