import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res) {
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render("flights/index", {
      flights: flights,
      title: "All Flights",
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', {
      flight: flight,
      // Why can't I name this something other than title? Something to do with the stylesheets?
      // Or the href in the nav.ejs?
      title: "Flight Detail"
    })
  })
  .catch(err => {
    res.redirect('/')
  })
}


export {
  newFlight as new,
  create,
  index,
  show,
}