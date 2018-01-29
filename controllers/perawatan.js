const Perawatan = require('../models/perawatan')

module.exports = {
  allResult: (req, res) => {
    Perawatan.find({
      $or: [
        {
          status: 'selesai'
        }, {
          status: 'batal'
        }
      ]
    })
    .populate({
      path: 'pasien_id',
      model: 'Pasien'
    })
    .populate({
      path: 'poli_id',
      model: 'Poli'
    })
    .populate({
      path: 'dokter_id',
      model: 'Dokter'
    })
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },
  all: (req, res) => {
    Perawatan.find({
      $or: [
        {
          status: 'antri poli'
        }, {
          status: 'masuk poli'
        }, {
          status: 'sedang berobat'
        }
      ]
    })
    .populate({
      path: 'pasien_id',
      model: 'Pasien'
    })
    .populate({
      path: 'poli_id',
      model: 'Poli'
    })
    .populate({
      path: 'dokter_id',
      model: 'Dokter'
    })
    // .populate({
    //   path: 'resep_id',
    //   model: 'Resep'
    // })
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },
  create: (req, res) => {
    Perawatan.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },
  byPoli: (req, res) => {
    Perawatan.find({
      poli_id: req.params.id,
      $or: [
        {
          status: 'antri poli'
        }, {
          status: 'masuk poli'
        }, {
          status: 'sedang berobat'
        }
      ]
    })
    .populate({
      path: 'pasien_id',
      model: 'Pasien'
    })
    .populate({
      path: 'poli_id',
      model: 'Poli'
    })
    .populate({
      path: 'dokter_id',
      model: 'Dokter'
    })
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },
  updateProses: (req, res) => {
    Perawatan.findById(req.params.id)
    .then(findResult => {

      Perawatan.update({
        _id: req.params.id
      }, {
        status: req.body.status || findResult.status,
        keluhan: req.body.keluhan || findResult.keluhan
      })
      .then(updateResult => res.send(updateResult))
      .catch(err => res.send(err))

    })
    .catch(err => res.send(err))
  },
  allApotek: (req, res) => {
    Perawatan.find({
      $or: [
        {
          status: 'antri apotek'
        }, {
          status: 'ambil obat'
        }
      ]
    })
    .populate({
      path: 'pasien_id',
      model: 'Pasien'
    })
    .populate({
      path: 'poli_id',
      model: 'Poli'
    })
    .populate({
      path: 'dokter_id',
      model: 'Dokter'
    })
    .then(findResult => res.send(findResult))
    .catch(err => res.send(err))
  },
  allPoli: (req, res) => {
    Perawatan.find({
      $or: [
        {
          status: 'antri poli'
        }, {
          status: 'masuk poli'
        }, {
          status: 'sedang berobat'
        }
      ]
    })
    .populate({
      path: 'pasien_id',
      model: 'Pasien'
    })
    .populate({
      path: 'poli_id',
      model: 'Poli'
    })
    .populate({
      path: 'dokter_id',
      model: 'Dokter'
    })
    .then(findResult => res.send(findResult))
    .catch(err => res.send(err))
  }
}