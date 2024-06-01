# DesafioAtria
This is a repository to save the Atria challenge code.
This project implements a simple REST API that supports basic CRUD operations to manage user data.

## Features
* Add, update, retrieve, and delete user information.
* An user have a name and an email.

## Getting Started
### Prerequisites
* Node.js installed on your system.
* npm or yarn to manage packages.

### Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required packages:
```
npm install
```
or if you use yarn:
```
yarn install
```

### Environment variables
Before you start the server, you need to create the .env file with the environment variables:
1. Create a `.env` file in the root directory of the project.
2. Replace the placeholder value with your actual data. For example:
```
SERVER_HOST=3000
```
This variable sets the port number for your server. You can change 3000 to any other port number that suits your needs.

### Running the application
1. Open your terminal
2. Navigate to the project directory.
3. Start the server by running
```
npm start
```

### API Endpoints
The following endpoints are availabe in this API:
* GET /users: Return all users.
* GET /users/:id: Return a single user by ID.
* POST /users: Add a new user. Requires name and email in the request body.
* PUT /users/:id: Update an existing user by ID. Requires name and email in the request body.
* DELETE /users/:id: Delete an user by ID.

### Testing the API with Postman
I recommend using Postman to test the API.

### Built with
* Node.js
* Express

### Author
Felipe Akira Nozaki