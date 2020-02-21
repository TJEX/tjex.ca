const express = require('express')
const config = require('config')
const sassMiddleware = require('node-sass-middleware')

const app = express()

app.set('views', 'public/views')
app.set('view engine', 'ejs')
app.use(sassMiddleware({ src: 'public', debug: config }))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const routes = require('./routes')(app)

app.listen(config.get('express.port'),
  () => console.log('Listening on port', config.get('express.port')))
