import { Flight } from "../models/flight.js"


function index (req, res){
  Flight.find({}, function(error, flights){
    res.render('flights/index', {
      error,
      flights,
      title: "All Flights"
    })
  })
}

function newFlight(req, res) {
  const newFlight = new Flight()
  const dt = newFlight.departs
  const departsDate = dt.toISOString().slice(0,16)
  res.render('flights/new', {
    departsDate,
    title: "Add Flight"
  })
}

function create(req, res){
  if (req.body.departs === ""){
    delete req.body.departs
  }
  const flight = new Flight(req.body)
  flight.save(function(err){
    if(err) return res.redirect('/flights/new')
    res.redirect('/flights')
  })
  console.log(req.body);
}

function show(req, res){
  Flight.findById(req.params.id, function(err, flight){
    res.render('flights/show', {
      title: "Flight Details",
      flight
    })
  })
}

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id, function(err, flight){
    res.redirect('/flights')
  })
}

function edit(req, res){
  Flight.findById(req.params.id, function(err, flight){
    res.render('flights/edit', {
      flight,
      err,
      title:"Edit Your Flight"
    })
  })
}

function update(req, res){
  Flight.findByIdAndUpdate(req.params.id, req.body, function(err, flight){
    res.redirect(`/flights/${flight._id}`)
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update
}