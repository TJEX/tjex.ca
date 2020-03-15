const express = require('express')
const route = express.Router()
const controllers = require('../controllers')

module.exports = (app) => {
  app.get('/', controllers.home.index)
  app.get('/locations', controllers.locations.index)
  app.get('/about', controllers.about.index)
  app.get('/contact', controllers.contact.index)
  app.post('/contact', controllers.contact.sendMessage, controllers.contact.index)
  app.get('/faq', controllers.faq.index)
}
