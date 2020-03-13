const express = require('express')
const config = require('config')
const sassMiddleware = require('node-sass-middleware')
const compression = require('compression')
const helmet = require('helmet')

const app = express()

app.use(compression())
app.use(helmet())
app.set('views', 'public/views')
app.set('view engine', 'ejs')
app.use(sassMiddleware({
  src: 'public',
  debug: true,
  outputStyle: 'compressed'
}))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const routes = require('./routes')(app)

app.listen(config.get('express.port'),
  () => console.log('Listening on port', config.get('express.port')))
