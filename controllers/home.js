const _ = require('lodash')
const moment = require('moment')
const reqp = require('request-promise')

const NUM_UPCOMING_EVENTS = 6

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
          const eventMoment = moment(event.time)

          return {
            name: _.get(event, 'name'),
            link: _.get(event, 'link', 'www.meetup.com/tjex-ca'),
            isSpecial: isSpecialEvent(event),
            isRsvpOpen: _.get(event, 'rsvpable', false),
            startTime: {
              full: eventMoment.format('ddd, MMM D, h:mm a'),
              day: eventMoment.format('ddd'),
              date: eventMoment.format('D'),
              month: eventMoment.format('MMM'),
              time: eventMoment.format('h:mma')
            }
          }
        })
        .value()

      res.setHeader('Cache-Control', 'public, max-age=28800')
      res.render('home', { events })
    })
}

function isSpecialEvent(event) {
  return _.get(event, 'fee.amount', 0) !== 2
}

module.exports = {
  index
}
