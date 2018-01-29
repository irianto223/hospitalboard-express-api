const router = require('express').Router()
const pasien = require('../controllers/pasien')

router.get('/', pasien.all)

router.post('/', pasien.create)

module.exports = router