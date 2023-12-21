// routes/events.js
import express from "express";
import {
  createEvents,
  getAllEvents,
  getEventById,
  updateEvent,
  getLatestEvents,
  deleteEvent,
  attendEvent,
} from "../controllers/event.js";

const router = express.Router();

router.post("/", createEvents);
router.get("/", getAllEvents);
router.get("/recent", getLatestEvents);
router.get("/:id", getEventById);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.post("/:eventId/attend", attendEvent); // New route for attending events

export default router;
