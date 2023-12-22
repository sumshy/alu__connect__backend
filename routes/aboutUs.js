// /backend/routes/aboutUs.js
import express from "express";
import { submitAboutUsForm } from "../controllers/aboutUsController.js";

const router = express.Router();

router.post("/", submitAboutUsForm); 

export default router;
