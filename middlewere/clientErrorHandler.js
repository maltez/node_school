const HttpError = require('../services/error.service');

class ClientErrorHandler {
    handle(err, req, res, next) {

        if (typeof err === 'number') {
            err = new HttpError(err);
        }

        if (err instanceof HttpError) {
            res.status(err.status);
            res.json(err.message);
        } else {
            err = new HttpError(500);
            res.status(err.status);
            res.send(err.message);
        }
    }
}

module.exports = (new ClientErrorHandler()).handle;