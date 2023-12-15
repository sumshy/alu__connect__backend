// /backend/index.js
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import eventsRouter from "./routes/events.js";
import aboutUsRouter from "./routes/aboutUs.js";
import { PORT, mongoDBURL } from "./config.js";
import authRouter from "./routes/auth.js";

const app = express();

app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "*" }));



// Your existing routes
app.use("/events", eventsRouter);
app.use("/about-us", aboutUsRouter);
app.use('/auth', authRouter);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To ALU Alumni Platform");
});



mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to the database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
