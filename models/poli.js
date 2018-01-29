const mongoose = require('mongoose')

const poliSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const poliModel = mongoose.model('Poli', poliSchema)

module.exports = poliModel