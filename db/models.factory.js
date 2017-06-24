const connection = require('./connection.db');

module.exports = (name, attrs) => {
  return connection.model(name, attrs);
};