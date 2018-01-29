const router = require('express').Router()
const perawatan = require('../controllers/perawatan')

router.get('/', perawatan.all)
router.get('/result', perawatan.allResult)
router.get('/apotek', perawatan.allApotek)
router.get('/poli/:id', perawatan.byPoli)

router.post('/', perawatan.create)

router.put('/proses/:id', perawatan.updateProses)

module.exports = router