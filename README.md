
# 🗂️ Notes & Users API (Node.js + Express + MongoDB)

This project is a RESTful API built using **Node.js**, **Express**, and **Mongoose**. It provides basic CRUD operations for managing **users** and their **notes**.

---

## 📁 Project Structure
project/
│
├── controller/
│ ├── usercontroller.js
│ └── notescontroller.js
│
├── routes/
│ ├── userroutes.js
│ └── notesroutes.js
│
├── models/
│ ├── User.js
│ └── Notes.js
│
└── app.js 


---

## 🧪 API Endpoints

---


### 📝 NOTES ROUTES

| Method | Route                  | Description                        |
|--------|------------------------|------------------------------------|
| GET    | `/notes`                    | Get all notes                      |
| POST   | `/notes/Addnotes`            | Add a new note                     |
| GET    | `/notes/Findnotes/:id`       | Get a note by ID                   |
| PUT    | `/notes/Updatenotes/:id`     | Update a note by ID                |
| DELETE | `/notes/Deletenotes/:id`     | Delete a note by ID                |

### 📌 USER ROUTES

| Method | Route               | Description                             |
|--------|---------------------|------------------------------------     |
| GET    | `/users`                 | Get all users                      |
| POST   | `/users/Adduser`          | Add a new user                    |
| GET    | `/users/Finduser`         | Find a user (update logic needed)  |
| DELETE | `/users/Deleteuser/:id`   | Delete a user by ID                |

---
---

## ⚙️ How to Run Locally

1. **Clone the repository**  
   ```bash
   git clone https://github.com/mananmkgithub/notesapi.git

2. ** Install dependencies **  
   npm install


Set up environment variables
Create a .env file and add your MongoDB URI:

Start the server
npm start

🛠️ Tech Stack
Node.js

Express.js

MongoDB & Mongoose

REST API




