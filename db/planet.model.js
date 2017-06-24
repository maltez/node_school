const modelsFactory = require('./models.factory');

const modelName = 'Planet';
const attrs = {
  name:     String,
  diameter: Number,
  weight:   Number
};

module.exports = modelsFactory(modelName, attrs);

