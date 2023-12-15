// /backend/routes/aboutUs.js
import express from "express";
import { submitAboutUsForm } from "../controllers/aboutUsController.js";

const router = express.Router();

// Define route for handling about us page
router.post("/", submitAboutUsForm); // Update this line based on your actual logic

export default router;
