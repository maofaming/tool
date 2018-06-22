const express = require('express')
const router = express.Router()
const clean = require('./clean')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now())
	next()
})

router.post('/clean/html', clean.html)
router.get('/clean/config', clean.config)

module.exports = router