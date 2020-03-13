const _ = require('lodash')
const moment = require('moment')
const reqp = require('request-promise')

const NUM_UPCOMING_EVENTS = 5

function index(req, res) {
  reqp({ uri: 'http://api.meetup.com/tjex-ca/events',
    qs: {
      offset: 0,
      page: NUM_UPCOMING_EVENTS,
      status: 'upcoming'
    },
    json: true
  })
    .then((api_res) => {
      let events = _.chain(api_res)
        .map((event) => {
          event.formatted_starttime = moment(event.time).format('ddd, MMM D, h:mm a')
          event.is_special = _.get(event, 'fee.amount', 0) !== 2
          return event
        })
        .value()
      res.render('home', { events })
    })
}

module.exports = {
  index
}
