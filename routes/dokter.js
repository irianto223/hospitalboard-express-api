const router = require('express').Router()
const dokter = require('../controllers/dokter')

router.get('/', dokter.all)

router.post('/', dokter.create)

module.exports = router