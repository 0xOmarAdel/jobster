# Jobster

## Description

Jobster is a project created for practicing Mongoose, JWT, and Express. It includes user authentication (login/register/update) and CRUD operations for job models.

## Installation

Make sure you have Node.js and npm installed on your machine.

1. Clone the repository:
   ```bash
   git clone https://github.com/0xOmarAdel/jobster.git
   cd jobster
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following variables:

   ```env
   PORT=5000
   MONGODB_URL=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   JWT_LIFETIME=30d
   ```

4. Start the application:
   ```bash
   npm start
   ```

   The application will be accessible at http://localhost:5000.

## Scripts

- `npm start`: Start the application using nodemon.

## Technologies Used

- Node.js
- Express
- Mongoose
- JWT (jsonwebtoken)
- Bcryptjs
- Cors
- Dotenv
- Express-async-errors
- Express-rate-limit
- Helmet
- HTTP Status Codes
- Rate Limiter
- XSS Clean
- YAMLjs

## Project Structure

- **Models:**
  - User Model: Handles user authentication (login/register/edit).
  - Job Model: Provides CRUD operations for job entities.

- **Middleware:**
  - Authentication Middleware: Verifies JWT tokens for secure routes.
  - Rate Limiter Middleware: Limits the rate of requests to prevent abuse.

- **Routes:**
  - Auth Routes: Handles user authentication.
  - Job Routes: Manages CRUD operations for job entities.

- **Utilities:**
  - Error Handling: Express-async-errors for handling asynchronous errors.
  - Validation: Joi for request validation.

- **Security:**
  - Helmet: Enhances application security with HTTP headers.
  - XSS Clean: Protects against cross-site scripting attacks.