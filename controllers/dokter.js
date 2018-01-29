const Dokter = require('../models/dokter')

module.exports = {
  all: (req, res) => {
    Dokter.find()
    .populate({
      path: 'poli_id',
      model: 'Poli'
    })
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },
  create: (req, res) => {
    Dokter.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.send(err))
  }
}