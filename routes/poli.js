const router = require('express').Router()
const poli = require('../controllers/poli')

router.get('/', poli.all)

router.post('/', poli.create)

module.exports = router