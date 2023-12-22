import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["professional development", "networking", "campus events"],
    required: true,
  },
  // organizer: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User", // Assuming you have a User model for alumni students
  //   required: true,
  // },
  organizer: {
    type: String,
    required: true,
  },
  attendees: {
    type: [String],
    default: [],
  },
});

const Event = mongoose.model("events", eventSchema);

export default Event;
