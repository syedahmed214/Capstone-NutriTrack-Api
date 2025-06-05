# Project Title
NutriTrack

## Overview

NutriTrack is a comprehensive web application designed to help users plan meals, track nutrition, and develop healthier eating habits.

### Problem

In today's fast-paced world, maintaining a balanced diet is challenging. People struggle with planning nutritionally balanced meals consistently, understanding their actual nutritional intake, finding time to shop for and prepare healthy meals, and tracking progress toward personal health goals. NutriTrack addresses these challenges by providing an all-in-one solution for meal planning, nutrition tracking, and dietary analytics.

### User Profile

- Health-conscious individuals:
    - looking to plan daily, weekly, or monthly meals
    - wanting to track their nutritional intake
    - needing to generate shopping lists based on meal plans
    - wanting insights into their dietary patterns

### Features

#### Phase 1 (MVP - Demo Day Ready)
- As a user, I want to be able to create an account to manage my meal plans and nutrition data
- As a user, I want to be able to login to my account to access my personalized information
- As a logged in user, I want to be able to plan meals on an interactive calendar
- As a logged in user, I want to be able to track my daily nutritional intake

#### Phase 2 (Post-MVP Enhancement)
- As a logged in user, I want to be able to set and track progress toward nutritional goals


## Implementation

### Tech Stack

- React
- Redux
- MongoDB
- Express
- Node.js
- Client libraries: 
    - react
    - react-router
    - redux
    - tailwind CSS
    - axios
    - chart.js
- Server libraries:
    - express
    - mongoose
    - bcrypt for password hashing
    - jwt for authentication

### Sitemap

- Home page
- Register
- Login
- Dashboard
- Meal Planning Calendar
- Nutrition Tracker
- Analytics
- User Profile


### Endpoints

**GET | POST | PUT FOR MEAL**

  meals: {
        createMeal: 'POST /api/meals',
        updateMeal: 'PUT /api/meals/:id',
        deleteMeal: 'DELETE /api/meals/:id',
        getAllMeals: 'GET /api/meals',
        getMealById: 'GET /api/meals/:id'
      }

**GET | POST | PUT FOR USER**

 auth: {
        register: 'POST /api/auth/register',
        login: 'POST /api/auth/login',
        logout: 'POST /api/auth/logout',
        profile: 'GET /api/auth/me',
        updateProfile: 'PUT /api/auth/profile',
       
      },


### Auth

- JWT auth
    - Store JWT in localStorage, remove when a user logs out
    - Include JWT in API requests that require authentication
    - Protected routes for authenticated users

## Roadmap

### Phase 1: Backend Foundation & MVP (Weeks 1-2)
1. **Backend API & Database Setup** (Priority)
   - Create server with Express project and MongoDB connection
   - Set up authentication middleware
   - Create database models:
     - User model
     - Recipe model
     - Meal plan model
     - Nutrition log model
   - Build core API endpoints
 

2. **Frontend Core Development**
   - Create React project with Redux setup and component hierarchy
   - Design system using Tailwind CSS
   - Implement register and login pages + forms
   - Create authentication handling
   - Build recipe browser and search functionality
   - Develop meal planning calendar component
   - Implement basic nutrition tracking dashboard

### Phase 2: Feature Enhancement (Final Weeks)
- Implement nutritional goals tracking
- Create data visualization for analytics
- Develop shopping list generation
- Add final UI polish and optimization
- Complete end-to-end testing
- Deploy client and server projects
- Fix bugs and optimize performance

## Local Development Setup

### Prerequisites
- Node.js (v16+)
- MongoDB (v4+)
- Git

### MongoDB Setup
1. Install MongoDB on your local machine
   - For Windows: [MongoDB Windows Installation](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)
   - For Mac: `brew install mongodb-community`
   - For Linux: [MongoDB Linux Installation](https://www.mongodb.com/docs/manual/administration/install-on-linux/)

2. Start MongoDB service
   - Windows: `net start MongoDB`
   - Mac/Linux: `sudo systemctl start mongod`

3. Create a new database
   ```
   mongo
   use nutritrack_db
   exit
   ```

4. The application will automatically create required collections on first run

### Installation Steps
1. Clone the repository
   ```
   git clone https://github.com/yourusername/nutritrack.git
   cd nutritrack
   ```

2. Install dependencies for both frontend and backend
   ```
   # Install backend dependencies
   cd server
   npm install
   
   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables
   - Create a `.env` file in the server directory based on `.env.example`
   - Configure your MongoDB connection string, JWT secret, and API keys

4. Start the development servers
   ```
   # Start backend server (from server directory)
   npm run dev
   
   # Start frontend development server (from client directory)
   npm run dev
   ```

5. Access the application
   - Backend API: http://localhost:3000
   - Frontend: http://localhost:3001 || http://localhost:5317