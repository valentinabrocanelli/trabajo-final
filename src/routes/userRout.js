const express = require('express')

const getUser = require('../controllers/userController')

const userRout = express.Router()

userRout.get('/user', getUser)
module.exports = userRout