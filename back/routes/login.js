const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/Users.models')

router.get("/", (req, res, next) => {
    User.findAll().then((users) => res.send(users));
});

router.post("/", passport.authenticate("local"), (req, res, next) => { // el authenticate es sobre las cookies 
    res.send(req.user)
});


module.exports = router