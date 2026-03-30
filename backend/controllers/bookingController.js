import { bookTicketService } from "../services/bookingService.js";

export const createBooking = async (req, res, next) => {
  try {
    const { user_id, event_id } = req.body;

    if (!user_id || !event_id) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const code = await bookTicketService(user_id, event_id);

    res.json({
      message: "Booking successful",
      booking_code: code,
    });
  } catch (err) {
    next(err);
  }
};
