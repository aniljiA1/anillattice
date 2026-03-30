import { pool } from "../config/db.js";

export const getUserBookings = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.query(
      `SELECT b.*, e.title, e.date 
       FROM bookings b
       JOIN events e ON b.event_id = e.id
       WHERE b.user_id = ?`,
      [id],
    );

    res.json(rows);
  } catch (err) {
    next(err);
  }
};
