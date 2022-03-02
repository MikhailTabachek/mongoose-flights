import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  const newFlight = new Flight()
  const dt = newFlight.departs
  const departsDate = dt.toISOString().slice(0,16)
  res.render('flights/new', {departsDate})
}

function index (req, res){
  Flight.find({}, function(error, flights){
    res.render('flights/index', {
      flights,
      error,
      title: "All Flights"
    })
  })
}

function create(req, res){
  const flight = new Flight(req.body)
  flight.save(function(err){
    if(err) return res.redirect('/flights/new')
    res.redirect('/flights')
  })
  console.log(req.body);
}

export {
  newFlight as new,
  create,
  index
}