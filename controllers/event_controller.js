const db = require("../models");

let createEvent = (req, res) => {
  db.Event
    .create({
      nama_event: req.body.nama_event,
      tgl_event: req.body.tgl_event,
      judul_event: req.body.judul_event,
      email_event_organizer: req.body.email_event_organizer,
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err.message);
    })
}

let dataEvent = (req, res) => {
  db.Event
    .findAll()
    .then((result) => {
      let data = []
      result.forEach((res) => {
        data.push(res)
      })
      res.send(data)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let updateEvent = (req, res) => {
  db.Event
    .update(
      {nama_event: req.body.nama_event,tgl_event: req.body.tgl_event,judul_event: req.body.judul_event,email_event_organizer: req.body.email_event_organizer},
      {where: {id: req.params.id}}
    )
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let removeEvent = (req, res) => {
  db.Event
    .destroy(
      {where: {id: req.params.id}}
    )
    .then((result) => {
      res.send(`Data event with id ${req.params.id} was deleted!`)
    })
    .catch((err) => {
      res.send(err.message)
    })
}


module.exports = {
  createEvent, dataEvent, updateEvent, removeEvent
}
