const mongoose = require('mongoose')

const pasienSchema = mongoose.Schema({
  no_kartu: {
    type: String,
    required: true,
    unique: true
  },
  nama: {
    type: String,
    required: true
  },
  alamat: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const pasienModel = mongoose.model('Pasien', pasienSchema)

module.exports = pasienModel