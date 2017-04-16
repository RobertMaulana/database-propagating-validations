const express = require('express');
const router = express.Router();
const eventController = require("../controllers/event_controller");

router.post("/", eventController.createEvent)
router.get("/", eventController.dataEvent)
router.put("/:id", eventController.updateEvent)
router.delete("/:id", eventController.removeEvent)

module.exports = router
