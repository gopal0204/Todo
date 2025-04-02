# MERN To-Do App

A simple To-Do application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This app allows users to add, view, and delete tasks.

## 🚀 Features

✅ Add tasks with an input field  
📋 View all tasks in a list format  
❌ Delete tasks with a single click  
📱 Responsive design (works on mobile & desktop)  

## 📂 Project Structure
```
mern-todo/
│── backend/          # Node.js & Express.js server
│   ├── models/       # Mongoose models
│   ├── routes/       # Express API routes
│   ├── .env          # Environment variables
│   ├── server.js     # Main backend file
│── frontend/         # React.js UI
│   ├── src/
│   │   ├── components/ # UI Components
│   │   ├── App.js     # Main React component
│   │   ├── index.js   # Entry point
│── README.md         # Documentation
│── package.json      # Dependencies
```

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/mern-todo.git
cd mern-todo
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
```

Create a `.env` file inside the backend folder and add:
```env
MONGO_URI=mongodb+srv://yourUsername:yourPassword@cluster.mongodb.net/todo?retryWrites=true&w=majority
PORT=5000
```

Start the backend server:
```sh
npm start   # OR use nodemon server.js
```

### 3️⃣ Frontend Setup
```sh
cd ../frontend
npm install
npm start
```
The app should now be running on [http://localhost:3000](http://localhost:3000)

## 🔗 API Endpoints

| Method  | Endpoint        | Description           |
|---------|---------------|----------------------|
| GET     | /api/todos    | Fetch all to-do items |
| POST    | /api/todos    | Add a new to-do item |
| DELETE  | /api/todos/:id | Delete a to-do by ID |

## 🎨 Tech Stack

- **Frontend:** React.js, Axios  
- **Backend:** Node.js, Express.js, Mongoose  
- **Database:** MongoDB (Atlas)  

![Screenshot 2025-04-02 161732](https://github.com/user-attachments/assets/3eb8b88e-3ecb-4269-8720-59a943a927bb)
![Screenshot 2025-04-02 161924](https://github.com/user-attachments/assets/2dc210d5-a2a0-4e67-8312-934452557cf2)

