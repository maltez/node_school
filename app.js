const config = require('./config/server.config');
const http = require('http');
const app = require('express')();
const bodyParser = require('body-parser');

// Routes import
const index = require('./routes/index.router');

const logger = require('./utilities/logger');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Middleware register
app.use(logger);

app.use((req, res, next) => {
    console.log(JSON.stringify(req.body));
    next();
});

app.use('/', (req, res)=>{
    res.sendfile('testForm.html');
});

const server = http.createServer(app);

server.listen(config.port, config.host, () => {
    console.log(`Listen server on ${config.host}:${config.port}`);
});
