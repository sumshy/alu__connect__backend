
//CRUD OPERATIONS
import express from "express";
import Event from "../models/eventModel.js";

export const createEvents = async (req, res) => {
  const { title, description, location, category, organizer, date } = req.body;
  console.log(req.body);
  try {
    const event = new Event({
      title,
      description,
      date,
      location,
      category,
      organizer,
    });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getLatestEvents = async (req, res) => {
  console.log("Latest Events");
  try {
    const events = await Event.find().sort({ date: -1 }).limit(3);
    res.json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getEventById = async (req, res) => {
  const eventId = req.params.id;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const eventData = req.body;
  try {
    const updatedEvent = await Event.findByIdAndUpdate(eventId, eventData, {
      new: true,
    });
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  const eventId = req.params.id;
  try {
    await Event.findByIdAndDelete(eventId);
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
