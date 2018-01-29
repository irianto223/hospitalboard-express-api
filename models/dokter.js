const mongoose = require('mongoose')

const dokterSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  poli_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poli'
  }
}, {
  timestamps: true
})

const dokterModel = mongoose.model('Dokter', dokterSchema)

module.exports = dokterModel