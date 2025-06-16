# 📘 Online Group Study Platform

An interactive full-stack web application that enables users to collaborate on academic assignments with friends. All registered users are friends by default. The app supports assignment creation, submission, peer grading, protected routes, authentication (email/password and Google), and theme toggling.

## 🚀 Live Site

👉 [Live Website Link](https://assignment-11-e732e.web.app)

## 🔧 Features

- ✅ User registration and login (Email/Password & Google)
- 🔐 Protected routes using JWT authentication
- 📚 Assignment creation with due date and difficulty
- 🎯 Assignment submission with Google Docs links and notes
- 📊 Peer grading with feedback and marks
- 🗂 Filter assignments by difficulty & search by title
- 🎨 Theme toggling (Light/Dark)
- 🖼 Interactive UI with Framer Motion animations
- 📱 Responsive design for all screen sizes

## 🖥️ Pages & Functionalities

### 🔝 Navbar
- Website name/logo
- Assignments (public)
- Conditional Login/Logout
- User Profile with dropdown
  - Create Assignment (private)
  - Pending Assignments (private)
  - My Attempted Assignments (private)

### 🏠 Home (Public)
- Hero banner with theme
- Features section
- FAQ section
- Framer Motion animations

### 🔐 Authentication
- **Login Page**: Email, password, Google login, link to Register
- **Register Page**: Name, email, password, photo URL, link to Login
- Password validation: 1 uppercase, 1 lowercase, min 6 chars

### 📝 Create Assignment (Private)
- Fields: Title, Description, Marks, Difficulty, Due Date, Thumbnail
- Validation included
- Success toast on creation

### 📂 Assignments Page (Public)
- Display all assignments
- View | Update | Delete buttons
- Delete allowed only for creator
- Update pre-fills current data

### 🔍 Filter & Search
- Filter by difficulty (easy/medium/hard)
- Search by title (server-side with MongoDB)

### 📄 View Assignment (Private)
- See full assignment details
- "Take Assignment" to open submission form
- Submit Google Docs link and note

### 📥 My Attempted Assignments (Private)
- Shows all submitted assignments by user
- Displays: Title, Status, Marks, Feedback

### ⏳ Pending Assignments (Private)
- Lists all ungraded submissions
- Allows peer grading
- Prevents self-marking

## 🛡 JWT Authentication
- Token created on login and stored in localStorage
- Token sent with protected requests via Axios interceptors
- Verifies user on private routes

## 💡 Tech Stack

| Technology    | Description                  |
|---------------|------------------------------|
| React.js      | Frontend framework           |
| React Router  | Page navigation              |
| Firebase      | Auth (email & social login)  |
| Express.js    | Backend framework            |
| MongoDB       | Database                     |
| JWT           | Token-based route protection |
| Tailwind CSS  | UI styling                   |
| DaisyUI       | UI components                |
| Framer Motion | Animations                   |
| React-Datepicker | Due date input           |
| SweetAlert2   | Alerts & toasts              |

## 🧪 Validation Rules

- Password: Min 6 chars, uppercase & lowercase
- Assignment Description: 20-30 characters minimum
- Marks field: Numbers only
- Image URL: Must be valid URL format

## 🌓 Theme Support
- Toggle light/dark mode
- Saves preference for the user

## 📁 Folder Structure

