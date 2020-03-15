const faq = require('../data/faq')

function index(req, res) {
  res.setHeader('Cache-control', 'public, max-age=31536000')
  res.render('faq', { faq })
}

module.exports = {
  index
}
