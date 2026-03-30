import { pool } from "../config/db.js";

export const getEvents = async (req, res, next) => {
  try {
    const [rows] = await pool.query("SELECT * FROM events WHERE date > NOW()");
    res.json(rows);
  } catch (err) {
    next(err);
  }
};

export const createEvent = async (req, res, next) => {
  try {
    const { title, description, date, total_capacity } = req.body;

    if (!title || !date || !total_capacity) {
      return res.status(400).json({ error: "Missing fields" });
    }

    await pool.query(
      "INSERT INTO events (title, description, date, total_capacity, remaining_tickets) VALUES (?, ?, ?, ?, ?)",
      [title, description, date, total_capacity, total_capacity],
    );

    res.json({ message: "Event created successfully" });
  } catch (err) {
    next(err);
  }
};

export const markAttendance = async (req, res, next) => {
  try {
    const { code } = req.body;

    const [booking] = await pool.query(
      "SELECT * FROM bookings WHERE booking_code = ?",
      [code],
    );

    if (booking.length === 0) {
      return res.status(404).json({ error: "Invalid code" });
    }

    await pool.query("INSERT INTO attendance (booking_code) VALUES (?)", [
      code,
    ]);

    res.json({
      message: "Attendance marked",
      tickets: booking.length,
    });
  } catch (err) {
    next(err);
  }
};
