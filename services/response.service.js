const status = require('http-status-codes');
const ResponseBase = require('../models/response');

const responseOk = () => {
    return new ResponseBase(status.OK, 'ping');
}

module.exports = {
    responseOk
}