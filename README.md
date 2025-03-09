# TaskTrack

TaskTrack is a task management application built using the **MERN** stack (MongoDB, Express.js, React, and Node.js). It allows users to efficiently organize, track, and manage their daily tasks with an intuitive interface.

## Current Progress

**Status:** Backend API is complete and functional.

### Completed Features:

- **User Registration:** Users can register with required fields: username, email, and password. FirstName and lastName are optional.
- **User Login:** Users can log in using their email and password, receiving a JWT token for authentication.
- **Authorization:** JWT token is used for securing routes and ensuring that users can only access their own data.
- **Task CRUD Operations:**
  - **GET /tasks:** Fetches all tasks for the authenticated user with the option to filter by status or priority.
  - **GET /tasks/:id:** Fetches a specific task by its ID.
  - **POST /tasks:** Allows users to create new tasks (with required `title` field validation).
  - **PUT /tasks/:id:** Allows users to update their tasks, with a check to ensure the `title` is not empty.
  - **DELETE /tasks/:id:** Allows users to delete their tasks.
- **Error Handling:** Global error handler for managing different types of errors (e.g., task not found, missing title).
- **Validation:** Ensures that the `title` is required when creating or updating a task.

## Features

- Create, update, and delete tasks
- Dashboard for task insights
- User authentication & authorization

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Other:** REST API

## Next Steps:

- **Frontend Integration:** Connect the backend API with the React frontend.
- **Testing:** Thorough testing of all API endpoints.
- **Additional Features:** Implement search and filtering functionality for tasks (e.g., by due date, priority, or status).
