# 📘 Notes & Users REST API with JWT Authentication

A clean and modular **Node.js REST API** built using **Express.js**, **MongoDB (Mongoose)**, and **JWT**. This app supports user registration, login, and secure CRUD operations for personal notes.

---

## 📂 Project Structure

```
├── auth/
│   └── jwt.js/auth.js                  # JWT middleware & token generator
├── controller/
│   ├── usercontroller.js       # Handles user logic
│   └── notescontroller.js      # Handles notes logic
├── models/
│   ├── user.js                 # User schema
│   └── notes.js                # Notes schema
├── routes/
│   ├── userRoutes.js           # User endpoints
│   └── notesRoutes.js          # Notes endpoints
├── app.js   
 ---- Package.json                # Entry point
└── .env                        # Environment configuration
```

---

## 🧾 Features

✅ User Registration & Login\
✅ JWT Authentication Middleware\
✅ CRUD Operations on Notes\
✅ User-specific note filtering\
✅ Modular MVC code structure

---

## 🔐 Authentication Flow

1. A user registers using `/Adduser`
2. Logs in using `/login` and receives a JWT token
3. Token is passed in `Authorization: Bearer <token>` for protected routes

---

## 🔗 API Endpoints

### 👥 User Routes (prefix: `/user`)

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- | 
| POST   | `/users/Adduser`        | Register a new user |
| POST   | `/users/login`          | Login and get token | 
| DELETE | `/users/Deleteuser/:id` | Delete user by ID   | 

### 📝 Notes Routes (prefix: `/notes`)

| Method | Endpoint                | Description                     
| ------ | ----------------------- | ----------------------- |
| GET    | `/notes/`                | Get all notes (public)  |
| GET    | `/notes/usernotes`        | Notes by logged-in user |
| POST   | `/notes/Addnotes`          | Create a new note      | 
| GET    | `/notes//Findnotes/:notesname`| Find note by name  |
| PUT    | `/notes/update/:id`          | Update note by ID     | 
| DELETE | `/notes/Deletenotes/:id`     | Delete note by ID      | 

---

## ⚙️ Installation Guide (Step-by-Step)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mananmkgithub/notesapi.git

```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
your pc requirement
PORT=5000
MONGODB_URI=mongodb://localhost:27017/notesapp
JWT_SECRET=yourSecretKey
```

### 4️⃣ Run the Server

```bash
npm run dev
```

Your server will run on `http://localhost:5000`

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (jsonwebtoken)**
- **bcryptjs** for password hashing
- **dotenv** for config

---

## 📬 Postman 

Add this header for secured endpoints:

```
Authorization: Bearer <your-token>
```

Example:

```bash
curl -H "Authorization: Bearer eyJ..." http://localhost:5000/notes/usernotes
```

---

## 👨‍💻 Author

Developed by **Manan Kolate**\
🔗 [GitHub Profile](https://github.com/mananmkgithub)

---


