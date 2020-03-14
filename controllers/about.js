const staff = require('../data/staff')

function index(req, res) {
  res.setHeader('Cache-control', 'public, max-age=86400')
  res.render('about', { staff })
}

module.exports = {
  index
}
