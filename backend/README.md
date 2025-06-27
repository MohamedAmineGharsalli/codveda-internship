# 🚀 MERN Backend - Authentication API (Codveda Internship)

## 📚 Overview

This is the backend API for my MERN Stack Authentication Project, built during my **Full Stack Development Internship at Codveda Technologies**.

The backend is built with **Node.js, Express.js, MongoDB, Mongoose**, and provides:

- ✅ User Registration & Login
- ✅ Secure JWT-based Authentication
- ✅ Password encryption with bcrypt
- ✅ Role-based Authorization (Admin/User)
- ✅ Protected API routes with middleware
- ✅ RESTful API structure following MVC architecture

---

## 🏗️ Project Structure

backend/
├── .env
├── index.js
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
└── package.json

---

## 🔧 Setup Instructions

1️⃣ Clone the repository:

```bash
git clone https://github.com/MohamedAmineGharsalli/codveda-internship-backend.git
cd codveda-internship-backend

2️⃣ Install dependencies:
npm install

3️⃣ Create a .env file with your environment variables:
PORT=5000
MONGO_URI=mongodb://localhost:27017/codveda
JWT_SECRET=codveda_internship_secret_key_2024
4️⃣ Start the server:
npm run dev
Backend should now be running at:
http://localhost:5000

📬 API Endpoints
Auth Routes
| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register new user   |
| POST   | `/api/auth/login`    | Login existing user |

User Routes (Protected - Admin only)
| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | `/api/users`     | Get all users |
| POST   | `/api/users`     | Create user   |
| PUT    | `/api/users/:id` | Update user   |
| DELETE | `/api/users/:id` | Delete user   |

⚠️ Use Bearer token in Authorization header for protected routes.
🛡️ Technologies Used
Node.js

Express.js

MongoDB

Mongoose

bcryptjs

JWT (jsonwebtoken)

dotenv

Postman

🙌 Special Thanks
Big thanks to Codveda Technologies for this learning opportunity!

#Codveda #MERN #BackendAPI #JWT #Authentication #Authorization #NodeJS #Express #InternshipExperience