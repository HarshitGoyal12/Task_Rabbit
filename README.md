

```markdown
# TaskRabbit
A simple task management application with user registration, authentication, profile image upload, and task management . Built using *React* for the frontend, *Node.js/Express* for the backend, and *MongoDB* for the database.
---
## Features
- **User Authentication**:
  - Register with a profile image upload.
  - Login with JWT-based authentication.
- **Task Management**:
  - Add, view, edit, and delete books.
- **User Profiles**:
  - Users can upload profile images during registration.
---
## Technologies Used
### Frontend:
- React
- React Router
### Backend:
- Node.js
- Express.js
- Bcrypt (password hashing)
- JSON Web Tokens (JWT)
### Database:
- MongoDB (with Mongoose)
---
## Installation
### 1. Clone the Repository
bash
git clone {gtihub url}
### 2. Set Up the Backend
1. Navigate to the backend folder:
bash
   cd backend
   
2. Install dependencies:
bash
   npm install
   
3. Create a `.env` file in the backend folder and configure:
env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=3000
   
4. Start the backend server:
bash
   npx nodemon server.js
   
### 3. Set Up the Frontend
1. Navigate to the frontend folder:
bash
   cd ../frontend
   
2. Install dependencies:
bash
   npm install
   
3. Start the frontend development server:
bash
   npm start
   
---
## Usage
1. Open the app in your browser at [http://localhost:3000](http://localhost:3000).
2. Register a new account with a profile image.
3. Log in and start managing your tasks.
---
### Backend
plaintext
backend/
├── models/          # schemas
├── routes/          #  routes
├── controllers/     # user and tasks
├── server.js        #  instance of the server
### Frontend
plaintext
frontend/src/
├── components/      # Reusable UI components
├── api.js           # Axios configuration
├── App.js           # Main entry point
---
```
