# lbs-project

# 📚 Library Management System (MERN Stack)

A full-stack Library Management System built using the MERN stack (MongoDB, Express, React, Node.js). This application allows users to manage books with full CRUD functionality.

---

## 🚀 Live Demo

* 🌐 Frontend: https://your-frontend.vercel.app
* 🔗 Backend API: https://library-management-system-g59p.onrender.com/api/books

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite), Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **Deployment:** Vercel (Frontend), Render (Backend)

---

## ✨ Features

* 📖 View all books
* ➕ Add new books
* ✏️ Update existing books
* ❌ Delete books
* 🔍 Search books by title
* 🌐 Fully deployed and accessible online

---

## 📁 Project Structure

```
project-root/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   └── index.html
```

---

## ⚙️ Installation & Setup

### 🔹 Clone the repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 🔹 Backend Setup

```
cd backend
npm install
```

Create a `.env` file in backend:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```
npm start
```

---

### 🔹 Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/books     | Get all books  |
| POST   | /api/books     | Add a new book |
| PUT    | /api/books/:id | Update a book  |
| DELETE | /api/books/:id | Delete a book  |

---

## 📌 Future Improvements

* 🔐 User Authentication (Login/Register)
* 📦 Pagination
* ⭐ Book ratings & reviews
* 📊 Admin dashboard

---

## 🙌 Acknowledgements

* MongoDB Atlas
* Render
* Vercel

---

## 📧 Contact

If you have any questions or feedback, feel free to reach out!

---

⭐ If you like this project, give it a star on GitHub!
