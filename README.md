Node.js Express MongoDB Application
This is a simple Node.js web application built with Express.js and MongoDB.

Installation
Clone this repository:
git clone (https://github.com/riteshkatekar/Assignment.git)

Install dependencies:
npm install

Set up environment variables:

Create a .env file in the root directory.

Start the server:

npm run dev 

Using the API
Endpoints

POST (http://localhost:5000/api/assistant): Create an assistant
GET (http://localhost:5000/api/assistant/:id) : Get an assistant  by id
PATCH (http://localhost:5000/api/assistant/:id): Update an assistant by id
DELETE (http://localhost:5000/api/assistant/:id) : Delete an assistant by id

Postman Collection
To test the API endpoints, you can use the provided Postman collection.

Import the Postman collection file (NodeExpressMongoDB.postman_collection.json) into Postman.
Update the environment variables in Postman if necessary.
Use the collection to send requests to the API endpoints.
