# ChatNova 💬

ChatNova is a simple AI-powered chat application built with **React, Tailwind CSS, Node.js, Express.js, MongoDB, and Groq API**.

## 🚀 Features

- User registration and login
- JWT authentication
- AI-powered chat
- Chat history
- Create and manage chat threads
- Delete chat threads
- Responsive React UI
- Tailwind CSS styling
- MongoDB database integration
- Groq API integration

## 🛠️ Technologies Used

### Frontend

- React
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- Groq API

## 📁 Project Structure

```text
ChatNova/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── Backend/
│   ├── Models/
│   ├── Routes/
│   ├── Utils/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
cd ChatNova
```

### 2. Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` folder:

```env
MONGODB_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
```

Start the backend:

```bash
npm start
```

The backend will run on:

```text
http://localhost:8080
```

### 3. Setup Frontend

Open another terminal:

```bash
cd Frontend
npm install
```

Create a `.env` file inside the `Frontend` folder:

```env
VITE_BACKEND_URL=http://localhost:8080
```

Start the frontend:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

## 🔗 Frontend–Backend Connection

The application works with the following flow:

```text
React Frontend
      ↓
Axios API Requests
      ↓
Express Backend
      ↓
MongoDB + Groq API
      ↓
Response
      ↓
React UI
```

## 🔌 Main API Endpoints

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
```

### Chat

```text
POST /api/chat
```

### Threads

```text
GET    /api/thread
GET    /api/thread/:threadId
DELETE /api/thread/:threadId
```

## 🔐 Environment Variables

Never upload your `.env` files to GitHub.

Add this to `.gitignore`:

```gitignore
node_modules/
.env
dist/
```

## ▶️ Running the Project

You need two terminals.

**Terminal 1 — Backend**

```bash
cd Backend
npm install
npm start
```

**Terminal 2 — Frontend**

```bash
cd Frontend
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

## 📌 Future Improvements

- User-to-user chat
- User list/search
- Profile management
- Image/file sharing
- Real-time messaging with Socket.IO
- Message timestamps
- Typing indicator
- Deployment

## 👩‍💻 Author

**Shikha Gaurav**

MCA | Full Stack Development | Generative AI

---

⭐ If you find this project useful, consider giving it a star on GitHub.