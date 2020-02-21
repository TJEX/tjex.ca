const express = require('express')
const route = express.Router()
const controllers = require('../controllers')

module.exports = (app) => {
  app.get('/', controllers.home.homepage)
}
