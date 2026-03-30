import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import eventRoutes from "./routes/eventRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/events", eventRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);

// Health Check Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
