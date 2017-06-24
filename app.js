const config = require('./config/server.config');
const http = require('http');

const errorhandler = require('errorhandler');
const morgan = require('morgan');
const app = require('express')();


// Routes import
const index = require('./routes/index.router');
const planets = require('./routes/planets.router');

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
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('./db/connection.db');

app.set('view engine', 'ejs');

// Middleware register
app.use(morgan('tiny'));


app.use('/index', express.static('public'));
app.use('/', index);
app.use('/base', index);
app.use('/planet', planets);


app.use(session({
  store: new MongoStore({ mongooseConnection: mongoose.connection })
 }));

const server = http.createServer(app);

server.listen(config.port, config.host, () => {
    console.log(`Listen server on ${config.host}:${config.port}`);
});
