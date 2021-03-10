const express = require('express')
const router = express.Router()
const register = require('./register')
const login = require('./login')
const secret = require('./secret')
const me = require('./me')

router.use('/register', register)
router.use('/login', login)
router.use('/secret', secret)
router.use('/logout', secret)
router.use('/logout', secret)
router.use('/me', me)



module.exports = router