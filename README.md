# DesafioAtria
This is a repository to save the Atria challenge code.
This project implements a simple REST API that supports basic CRUD operations to manage user data.

## Features
* Add, update, retrieve, and delete user information.
* An user have a name and an email.

## Getting Started
### Prerequisites
* Node.js installed on your system.
* npm to manage packages.

### Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required packages:
```
npm install
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
* GET /users: Returns status 200 and a JSON with all registered users.
* GET /users/:id: Returns status 200 and a JSON with the user specified by the id. If the user does not exist, returns status 404 and an error message.
* POST /users: Adds a new user to the system. Returns status 201 and a JSON with the created user. If any field sent by the body is empty, returns status 400 and an error message.
* PUT /users/:id: Updates the information of a specific user specified by the id. Returns status 200 and a JSON with the user and its updated information. If any field sent by the body is empty, returns status 400 and an error message.
* DELETE /users/:id: Removes a user specified by the id. Returns status 204. If the user does not exist, returns status 404 and an error message.

### Testing the API with Postman
I recommend using Postman to test the API.

### Built with
* Node.js
* Express

### Author
Felipe Akira Nozaki