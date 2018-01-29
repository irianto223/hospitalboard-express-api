const Pasien = require('../models/pasien')

module.exports = {
  all: (req, res) => {
    Pasien.find()
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },
  create: (req, res) => {
    Pasien.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.send(err))
  }
}