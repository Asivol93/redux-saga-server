// import mongoose from 'mongoose'
import listEndpoints from "express-list-endpoints"
import express from 'express'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 8081

import artData from "./artData.json" assert { type: "json" }

// const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/books'
// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.Promise = Promise

// const Calendar = mongoose.model("Calendar", {
//   weekday: String,
//   title: String,
//   description: String,
//   schedule: [{
//     time: String,
//     shortname: String,
//     artist: String,
//     room: String,
//     description: String,
//     title: String,
//   }]
// })
const weeklyCalendar = Object.fromEntries(Object.entries(artData).filter((key) => key.includes('calendar')));
const filterWeekdays = Object.values(weeklyCalendar)[0];
const weekdays = Object.values(filterWeekdays)

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

app.get('/calendar', (req,res) => {
  res.send(weekdays)
})

app.get('/artists', (req,res) => {
  const allArtists = Object.fromEntries(Object.entries(artData).filter((key) => key.includes('artists')));
  const filterArtists = Object.values(allArtists)[0];
  res.send(filterArtists)
})

app.get("/calendar/weekday/:day", (req, res) => {
  const { day } = req.params 

  // const individualDays = weekdays.filter((item) => item.weekday[0])
  // const individualDays = weekdays.map(function (el) {return entry.getValue(el.weekday)})


  res.send(weekdays)

})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})