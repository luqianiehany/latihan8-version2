const router = require('express').Router()
const controller = require('../controllers')

// Routes
router.get('/', controller.home)

const dashboard = require('./dashboard')
router.use('/dashboard', dashboard)

router.use(controller.notFound)
router.use(controller.exception)

module.exports = router