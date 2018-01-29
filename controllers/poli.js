const Poli = require('../models/poli')

module.exports = {
  all: (req, res) => {
    Poli.find()
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },
  create: (req, res) => {
    Poli.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.send(err))
  }
}