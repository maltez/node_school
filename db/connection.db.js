const mongoose = require('mongoose');
const { url, dataBase } = require('../config/db.config');

module.exports = mongoose.connect(`${url}/${dataBase}`);

