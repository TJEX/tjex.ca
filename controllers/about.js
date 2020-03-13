const STAFF = [
  {
    name: "Mark",
    main: true,
    position: "Co-founder & Treasurer"
  },
  {
    name: "Forough",
    main: true,
    position: "Head Organizer",
  },
  {
    name: "Lona",
  },
  {
    name: "Andy",
  },
  {
    name: "Carlo",
  },
  {
    name: "Ryan",
  },
  {
    name: "Pek",
  },
  {
    name: "Brandon",
    image: "/img/staff/brandon.jpg",
    description: "I made this website."
  },
  {
    name: "Joe",
  },
  {
    name: "Yuumi"
  },
  {
    name: "Manami",
  },
  {
    name: "Daiki",
  }
]

function index(req, res) {
  res.setHeader('Cache-control', 'public, max-age=86400')
  res.render('about', { STAFF })
}

module.exports = {
  index
}
