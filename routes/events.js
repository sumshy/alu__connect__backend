import express from "express";

//Initialize router
const router = express.Router();
import {
  createEvents,
  getAllEvents,
  getEventById,
  updateEvent,
  getLatestEvents,
  deleteEvent,
} from "../controllers/event.js";

//Router HTTP methods
router.post("/", createEvents);
router.get("/", getAllEvents);
router.get("/recent", getLatestEvents);
router.get("/:id", getEventById);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;
