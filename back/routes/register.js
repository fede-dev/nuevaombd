const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../models/Users.models')

router.get("/", (req, res, next) => {
    User.findAll().then((users) => res.send(users));
});

router.post("/", (req, res, next) => {
    const { email, password } = req.body
    User.create({ email, password })
        .then((user) => {
            res.status(200).send(user);
        })
        .catch((err) => console.log(err));
});

module.exports = router