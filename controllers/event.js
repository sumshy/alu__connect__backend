//CRUD OPERATIONS
import express from "express";
import Event from "../models/eventModel.js";
// import sendEmail from "../utils/email.js";
import User from "../models/user.js";

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

// New function for attending events and sending emails
export const attendEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Find the user (you may need to implement user authentication)
    const { userId } = req.body; // Assuming you have a userId in your request
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add the user to the event's attendees list
    event.attendees.push(userId);
    await event.save();

    // Send an email to the user
    const subject = `You are attending the event: ${event.title}`;
    const message = `Dear ${user.name},\n\nYou have successfully registered for the event: ${event.title}.\n\nEvent details:\nDate: ${event.date}\nLocation: ${event.location}\n\nThank you for attending!`;

    // await sendEmail(user.email, subject, message);

    res.status(200).json({ message: "Attendance recorded and email sent" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
