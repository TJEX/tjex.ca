const express = require('express')
const route = express.Router()
const controllers = require('../controllers')

module.exports = (app) => {
  app.get('/', controllers.home.index)
  app.get('/locations', controllers.locations.index)
  app.get('/about', controllers.about.index)
  app.get('/contact', controllers.contact.index)
}
