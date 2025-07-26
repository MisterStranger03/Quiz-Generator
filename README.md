# 🚀 AI Quiz Generator

## ✨ About The Project

The goal of this project is to create a seamless and intelligent tool for **educators, students, and life-long learners**.  
Users can paste any block of text—from an article about history to a chapter from a science textbook—and receive a well-formed quiz to test their knowledge and comprehension.

The application is designed to be **fast, user-friendly, and robust**, handling AI model loading and database interactions efficiently on the backend.

---

## 🛠️ Tech Stack

### Frontend:
- **React.js** – For building a dynamic and responsive user interface.
- **Axios** – For making asynchronous API requests to the backend.

### Backend:
- **Node.js** – JavaScript runtime environment.
- **Express.js** – Lightweight framework for building RESTful APIs.
- **Mongoose** – ODM for MongoDB.
- **Hugging Face Transformers.js** – Running `Xenova/flan-t5-small` model directly in Node.js.

### Database:
- **MongoDB Atlas** – Cloud-hosted NoSQL database to store quizzes and user inputs.

---

## 🗂️ Project Structure

quiz-generator-app/
├── backend/
│   ├── api/
│   │   ├── controllers/
│   │   │   └── QuizController.js
│   │   ├── models/
│   │   │   └── QuizModel.js
│   │   ├── routes/
│   │   │   └── QuizRoutes.js
│   │   └── services/
│   │       └── nlpService.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── QuizForm.js
│   │   └── QuizDisplay.js
│   ├── services/
│   │   └── quizApi.js
│   ├── App.css
│   ├── App.js
│   └── index.js
└── package.json

---

## 🏁 Getting Started & Local Setup

### ✅ Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (v16 or later) – [Download Node.js](https://nodejs.org)
- npm – Comes bundled with Node.js
- MongoDB Atlas – [Create a free account](https://www.mongodb.com/cloud/atlas)

---

### 📦 Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/quiz-generator-app.git
cd quiz-generator-app
```


🛠️ Step 2: Setup the Backend

Navigate to the backend directory:

```bash
cd backend
```

Install backend dependencies:

```bash
npm install
```

Create a .env file in the backend directory and add your MongoDB URI:

```bash
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
```

Example:

```bash
MONGO_URI=mongodb+srv://abc:abc123@cluster0.abcde.mongodb.net/quizdb
```

🎨 Step 3: Setup the Frontend

Navigate to the frontend directory:

```bash
cd ../frontend
```

Install frontend dependencies:

```bash
npm install
```

🚀 Step 4: Run the Application

✅ Start the Backend Server

In a terminal window, from the backend directory:

```bash
npm start
```

You should see:

```bash
Server is running on http://localhost:5001
Connected to MongoDB
```

✅ Start the Frontend Server

Open a second terminal, navigate to the `frontend` directory, and run:

```bash
npm start
```

Your browser should open automatically to:

```
http://localhost:3000
```

## 🔍 How It Works

1. **User enters a block of text** in the frontend form.
2. **Text is sent to the backend API** using Axios.
3. The **NLP service** (`nlpService.js`) runs the Hugging Face model to generate questions based on the input.
4. The **resulting quiz** is stored in MongoDB and returned to the frontend.
5. **Quiz is displayed** on the UI with options to modify or retake it.

---

## 📁 File Breakdown

### 🔙 Backend

- `QuizController.js` – Handles incoming HTTP requests (text submission, quiz retrieval).
- `QuizModel.js` – Mongoose schema for storing quiz questions and metadata.
- `QuizRoutes.js` – Defines routes like `/generate`, `/quizzes`, etc.
- `nlpService.js` – Invokes and loads the Transformer model for quiz generation.

### 🎨 Frontend

- `QuizForm.js` – UI component for text input and quiz generation button.
- `QuizDisplay.js` – Displays the returned quiz questions.
- `quizApi.js` – Handles HTTP requests to the backend using Axios.
- `App.js` – Main React component.
- `App.css` – Custom styles.

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend/` directory with the following key:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
```

## 📌 Notes

- Ensure **MongoDB Atlas** allows connections from your IP (whitelist it in the Atlas dashboard).
- The AI model (`flan-t5-small`) runs inside **Node.js** using [`@xenova/transformers`](https://www.npmjs.com/package/@xenova/transformers).
- You can upgrade to larger models if needed (make sure your system has enough resources).

---

## 🧠 Future Improvements

- User authentication and login (JWT).
- Track user scores and progress.
- Export quiz to PDF.
- Support for multiple languages.
- Deploy to cloud platforms like **Render**, **Vercel**, or **Heroku**.

---

## 📄 License

This project is open source and available under the **[MIT License](https://opensource.org/licenses/MIT)**.

---

## 📬 Contact

Created by **Raman** – feel free to reach out on [GitHub](https://github.com/MisterStranger03).




<img width="1512" height="855" alt="01" src="https://github.com/user-attachments/assets/94cb3f99-cf06-4354-be08-e5d12c47a728" />
<img width="1512" height="844" alt="02" src="https://github.com/user-attachments/assets/19f3dc26-1e11-4a9d-81b5-11de6c8b0b07" />

