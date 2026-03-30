# 🚀 Mini Event Booking System (Node.js + MySQL)

## 📌 Overview

This project is a backend system that allows users to browse events and book tickets. It ensures data integrity using MySQL transactions and prevents race conditions during booking.

---

## Live

Screen Recording: https://drive.google.com/file/d/1eMJlWmRhLVXC51aiDU758BQ79v4XYQLi/view?usp=sharing
Postman Screenshot: https://drive.google.com/file/d/1-XSZRmkcVNMCgb12yBRpRbltR-EmGYgr/view?usp=sharing
Postman Screenshot: https://drive.google.com/file/d/1HH_QtdGTp2yi9IEq6ekOjhOuHh4kRPta/view?usp=sharing

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MySQL
* UUID (for booking codes)
* Swagger (OpenAPI documentation)

---

## Structure 

mini-events-system/
├── config/
├── controllers/
├── routes/
├── services/
├── middleware/
├── utils/
├── swagger/swagger.yaml
├── sql/schema.sql
├── .env 
├── server.js
├── package.json
└── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository


git clone https://github.com/<your-username>/event-booking-system.git
cd backend
```

---

### 2️⃣ Install Dependencies

npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in root:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=Anil@123
DB_NAME=event_db
PORT=8000
```

---

### 4️⃣ Setup Database

Open MySQL and run:

```sql
SOURCE sql/schema.sql;
```

This will create:

* users
* events
* bookings
* attendance tables

---

### 5️⃣ Run Server

```bash
npm run dev
```

Server will start at:
```
http://localhost:8000
```
---

```
http://localhost:8000/events
```
---
```
http://localhost:8000/users/1/bookings
```
---

## 🔍 API Health Check

```http
GET /
```

Response:

```json
{
  "message": "API is running"
}
```

---

## 📡 API Endpoints

### 🎟 Events

| Method | Endpoint  | Description             |
| ------ | --------- | ----------------------- |
| GET    | `/events` | Get all upcoming events |
| POST   | `/events` | Create new event        |

---

### 📌 Bookings

| Method | Endpoint    | Description   |
| ------ | ----------- | ------------- |
| POST   | `/bookings` | Book a ticket |

---

### 👤 Users

| Method | Endpoint              | Description             |
| ------ | --------------------- | ----------------------- |
| GET    | `/users/:id/bookings` | Get bookings for a user |

---

### ✅ Attendance

| Method | Endpoint                 | Description                        |
| ------ | ------------------------ | ---------------------------------- |
| POST   | `/events/:id/attendance` | Mark attendance using booking code |

---

## 🔥 Features

* ✅ Clean MVC Architecture
* ✅ MySQL Transactions for booking
* ✅ Prevent race conditions using `FOR UPDATE`
* ✅ Unique booking codes (UUID)
* ✅ Input validation & error handling
* ✅ RESTful API design

---

## 🗄️ Database Schema

### Users

* id
* name
* email

### Events

* id
* title
* description
* date
* total_capacity
* remaining_tickets

### Bookings

* id
* user_id
* event_id
* booking_code
* booking_date

### Attendance

* id
* booking_code
* entry_time

---

## 📄 API Documentation

Swagger file available at:

```
/swagger/swagger.yaml
```

---

## 📮 Postman Collection

A Postman collection is included in the repository for easy API testing.

```
Screenshot: https://drive.google.com/file/d/1-XSZRmkcVNMCgb12yBRpRbltR-EmGYgr/view?usp=sharing
```
---
```
Screenshot: https://drive.google.com/file/d/1HH_QtdGTp2yi9IEq6ekOjhOuHh4kRPta/view?usp=sharing
```


---

## 🚀 How to Test

1. Create user (via SQL or API)
2. Create event
3. Book ticket
4. Fetch user bookings
5. Mark attendance

---

## 🎯 Important Implementation Detail

> Implemented transaction handling with row-level locking (`FOR UPDATE`) to prevent race conditions during ticket booking.

---

## 👨‍💻 Author

**Anil Kumar**

---

