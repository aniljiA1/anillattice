import { pool } from "../config/db.js";
import { generateBookingCode } from "../utils/generateCode.js";

export const bookTicketService = async (user_id, event_id) => {
  const conn = await pool.getConnection();

  try {
    await conn.beginTransaction();

    const [[event]] = await conn.query(
      "SELECT * FROM events WHERE id = ? FOR UPDATE",
      [event_id],
    );

    if (!event) throw new Error("Event not found");

    if (event.remaining_tickets <= 0) {
      throw new Error("No tickets available");
    }

    const code = generateBookingCode();

    await conn.query(
      "INSERT INTO bookings (user_id, event_id, booking_code) VALUES (?, ?, ?)",
      [user_id, event_id, code],
    );

    await conn.query(
      "UPDATE events SET remaining_tickets = remaining_tickets - 1 WHERE id = ?",
      [event_id],
    );

    await conn.commit();

    return code;
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }
};
