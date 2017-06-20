class Logger {
    log(req, res, next){
        console.log(`[${req.method}] : ${req.url}`)
        next();
    }
}

module.exports = (new Logger()).log;