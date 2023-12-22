

import mongoose from "mongoose";

const contactUsMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ContactUsMessage = mongoose.model(
  "ContactUsMessage",
  contactUsMessageSchema
);

export default ContactUsMessage;
