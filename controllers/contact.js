const _ = require('lodash')
const nodemailer = require('nodemailer')
const config = require('../config/email.json')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  secure: true,
  port: 465,
  auth: {
    user: config.email,
    pass: config.password
  },
  tls: {
    rejectUnauthorized: false
  }
})

function index(req, res) {
  res.render('contact')
}

function sendMessage(req, res) {
  const name = _.get(req, 'body.contact-name')
  const email = _.get(req, 'body.contact-email')
  const message = _.get(req, 'body.contact-message')

  transporter.sendMail({
    from: config.email,
    to: config.email,
    subject: '[TJEX.ca Contact Form] ' + name,
    html: name + ' (' + email + ')<br/><br/>' + message
  }, (err, info, response) => {
    res.render('contact')
  })
}

module.exports = {
  index,
  sendMessage
}
