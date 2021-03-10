const express = require('express')
const router = express.Router()
const User = require('../models/Users.models')


router.get('me', (req, res) => {
    if (!req.user) return res.sendStatus(401)

    res.send(req.user)
})


module.exports = router