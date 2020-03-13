const express = require('express')
const config = require('config')
const sassMiddleware = require('node-sass-middleware')
const compression = require('compression')
const helmet = require('helmet')
const favicon = require('serve-favicon')

const app = express()

app.use(compression())
app.use(helmet())
app.use(favicon('public/img/favicon.ico', { maxAge: 31536000000 }))
app.set('views', 'public/views')
app.set('view engine', 'ejs')
app.use(sassMiddleware({
  src: 'public',
  debug: true,
  outputStyle: 'compressed'
}))
app.use(express.static('public', { maxAge: 31536000000 }))
app.use(express.urlencoded({ extended: true }))

const routes = require('./routes')(app)

app.listen(config.get('express.port'),
  () => console.log('Listening on port', config.get('express.port')))
