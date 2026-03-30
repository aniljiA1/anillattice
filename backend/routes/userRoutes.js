import express from "express";
import { getUserBookings } from "../controllers/userController.js";

const router = express.Router();

router.get("/:id/bookings", getUserBookings);

export default router;
