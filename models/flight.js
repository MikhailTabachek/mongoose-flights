import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
    required: true},
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN"},
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs:{
    type: Date,
    default: Date.now() + 365*24*60*60000,
    min: 2022
  }
}, {
  timestamps: true
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}