const status = require('http-status-codes');
const ResponseBase = require('../models/response');
const HttpError = require('../services/error.service');

const responseOk = () => {
    return new ResponseBase(status.OK, 'ping');
};

const responseBad = () => {
    return new HttpError(status.NOT_FOUND, 'Not Found')
};

module.exports = {
    responseOk,
    responseBad
};