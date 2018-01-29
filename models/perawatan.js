const mongoose = require('mongoose')

const perawatanSchema = mongoose.Schema({
  pasien_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pasien',
    required: true
  },
  poli_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poli',
    required: true
  },
  dokter_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dokter'
  },
  resep_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resep'
  },
  jenis: {
    type: String
  },
  status: {
    type: String
  },
  keluhan: {
    type: String
  },
  catatan_dokter: {
    type: String
  }
}, {
  timestamps: true
})

const perawatanModel = mongoose.model('Perawatan', perawatanSchema)

module.exports = perawatanModel