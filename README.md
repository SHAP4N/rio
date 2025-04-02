# Simple Full-Stack Web Application

This is a simple full-stack web application with React frontend and Node.js/Express backend.

## Project Structure
```
├── frontend/          # React frontend application
└── backend/          # Node.js/Express backend server
```

## Setup Instructions

### Running with Docker (Recommended)

1. Make sure you have Docker and Docker Compose installed on your system.

2. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

3. The application will be available at:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

4. To stop the containers:
   ```bash
   docker-compose down
   ```

### Running Locally (Without Docker)

#### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

#### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000 