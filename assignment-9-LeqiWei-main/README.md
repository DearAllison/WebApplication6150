[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/az8cjAgP)

# assignment-9

Name: Leqi Wei  
NUID: 001561748 
Email: wei.leq@northeastern.edu  

Create a simple Nodejs/Express REST API for Reminder app.

User Requirements:
```
As a developer, I should be able to fetch all existing reminders using Reminder Resource.
As a developer, I should be able to add a Reminder using Reminder Resource.
As a developer, I should be able to update a Reminder using Reminder Resource.
As a developer, I should be able to delete a Reminder using Reminder Resource.
```
Technical Requirements:  
```
The goal of this assignment is to learn about Nodejs and REST API.
Use the express framework for developing the endpoints.
Use MongoDB for the persistence layer.
A todo object has id, title, description, createdDate, & lastModifiedDate properties. 
```
## Description: RESTful API  

APIs available in this service

```
    // Retrieve all contacts
    GET /contacts

    // Create new contact
    POST /contacts

    // Retrieve a single contact by id
    GET /contacts/:id

    // Update a single contact by id
    PUT /contacts/:id

    // Remove a single contact by id
    DELETE /contacts/:id

```

## Run instructions:  
Install mongoose
```
    npm install --save cors debug express mongoose
```
After connecting to mongodb, use the following command to run server
```
    npm start  
```
Install postman to view the running application  
    http://localhost:9001/reminder 

### other commands may be useful:  
```
    npm init  
    npm i --save express mongoose cors  
    you should add ' "type": "module" ' to package.json file
    "control + c" to stop the running server
```

## Tools used
1. `expressjs` 
2. `mongoosejs` 