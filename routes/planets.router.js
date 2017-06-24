const router = require('express').Router();
const Planet = require('../db/planet.model');

router.get('/', (req, res) => {
  Planet.find({})
    .then(models => res.json(models))
    .catch(err => {throw err;});
});

router.post('/', (req, res) => {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    const planet = new Planet(JSON.parse(body.toString()));
    planet.save()
      .then(model => res.json(model))
      .catch(err => {throw err;});
  });
});

router.delete('/:id', (req, res) => {
  Planet.remove({ _id: req.params.id })
    .then(model => res.json(model))
    .catch(err => {throw err;});
});

router.put('/:id', (req, res) => {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    Planet.findOneAndUpdate({ _id: req.params.id }, JSON.parse(body.toString()), { new: true })
      .then(model => res.json(model))
      .catch(err => {throw err;});
  });
});

router.get('/:id', (req, res) => {
  Planet.findById(req.params.id)
    .then(planet => res.json(planet))
    .catch(err => {throw err;});
});


module.exports = router;