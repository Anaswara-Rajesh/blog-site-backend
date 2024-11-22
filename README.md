# Backend API for Blog Site

Description

This backend application is built with Node.js, Express, and JWT-based authentication. It powers a blog site where users can log in, create blog posts, and view a list of blogs. It includes JWT authentication, protected routes for users to create new blogs.

The backend supports the following functionalities:

    User authentication (with JWT & OAuth).
    API for creating and fetching blogs.
    Protected routes to ensure only authenticated users can create blogs.

Prerequisites

1) Before running the project, make sure you have the following software installed:

    Node.js (v14.x or above)
    MongoDB (or any database you are using)
    JWT Secret Key

2) Installation Clone the repository:

git clone https://github.com/your-username/blog-backend.git

cd blog-backend

3) Install dependencies:

npm install

4) Set up environment variables:

Create a .env file in the root directory and configure the following variables:

JWT_SECRET=your_jwt_secret_key
MONGO_URI=mongodb://localhost:27017/blogDb


5) Start the application:

    npx nodemon server.js  or node server,js

    The application will be running at http://localhost:5000.


6) API Endpoints

Authentication

* Register a new user with username , email and password. --> POST http://localhost:5000/api/auth/register

Request body:

{
  "username": "admin",
  "email": "admin@gmail.com",
  "password": "password123"
}

Response:

{
    "message": "User registered successfully"
}


* Log in and retrieve a JWT token --> POST http://localhost:5000/api/auth/login: 

Request body:

{
  "email": "admin@gmail.com",
  "password": "password123"
}

Response:

{
  "token": "your_jwt_token",
  "username": "admin"
}

Blog Endpoints

* Create a new blog (only for authenticated users) --->  POST http://localhost:5000/api/blogs

Request body:

{
  "title": "Blog Title",
  "body": "This is the content of the blog."
}

Response:

{
      "_id": "new_blog_id",
      "title": "Blog Title",
      "body": "This is the content of the blog.",
      "createdBy": "username",
      "createdAt": "2024-11-22T16:00:42.299Z"
}


* Get a paginated list of blogs (10 blogs per page) --> GET http://localhost:5000/api/blogs

Response:

{
"blogs": [
{
"_id": "blog_id_1",
"title": "Blog Title",
"body": "Blog body content",
"createdBy": "username",
"createdAt": "2024-11-20T12:34:56Z",
"__v": 0
},
...
],
"pagination": {
"currentPage": 1,
"totalPages": 10
}
}

* Get a single blog by ID --> GET http://localhost:5000/api/blogs/:id 

Response:

{
"id": "blog_id_1",
"title": "Blog Title",
"body": "Blog body content",
"createdBy": "username",
"createdAt": "2024-11-20T12:34:56Z",
"__v": 0
}


Protected Routes

POST /blogs: Only accessible to authenticated users with a valid JWT token.


