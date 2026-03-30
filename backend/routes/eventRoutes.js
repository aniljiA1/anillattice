import express from "express";
import {
  getEvents,
  createEvent,
  markAttendance,
} from "../controllers/eventController.js";

const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvent);
router.post("/:id/attendance", markAttendance);

export default router;
