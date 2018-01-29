const Poli = require('../models/poli')

const poliDummies = [
  { nama: 'Umum' },
  { nama: 'Gigi' },
  { nama: 'Penyakit Dalam' }
]

module.exports = {
  createDummyPoli: () => {
    Poli.findOne({
      $or: [
        { nama: 'Umum' },
        { nama: 'Gigi' },
        { nama: 'Penyakit Dalam' }
      ]
    })
    .then(result => {
      if (result == null) {
        
        poliDummies.map(poli => {
          Poli.create(poli)
          .then(result => console.log('Data dummy POLI ready:', result.nama))
          .catch(err => console.log(err))
        })
        

      } else {
        
        console.log('Data dummy POLI sudah ada...')

      }
    })  
  }
}