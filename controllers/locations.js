const GOOGLE_MAPS_API_KEY = 'AIzaSyDDtd393SY1ppnsPiMaI4xOa5cydnx6nJ0'
const LOCATIONS = [{
  name: "Wednesday: Yonge & Bloor Food Court",
  address: "2 Bloor Street East, Toronto, ON",
  query: "Bloor-Yonge, Toronto, ON",
  directions: "The food court is located on the east end of the building. When you exit the subway station, go left, passed the LCBO."
}, {
  name: "Saturday: Ontario Institute for Studies in Education (OISE)",
  address: "252 Bloor Street West, Toronto, ON",
  query: "OISE, Toronto, ON",
  "directions": "There is an entrance from St. George station."
}]

function index(req, res) {
  res.setHeader('Cache-control', 'public, max-age=604800')
  res.render('locations', {
    GOOGLE_MAPS_API_KEY,
    LOCATIONS
  })
}

module.exports = {
  index
}
