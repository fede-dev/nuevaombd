const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/Users.models')


router.get('/', (req, res) => {
    if (req.user) {
        res.send('ala')
    } else {
        res.sendStatus(401)
    }
})


module.exports = router