# Assignment-10-Leqi Wei  

Name: Leqi Wei  
NUID: 001561748  
Email: wei.leq@northeastern.edu  

### Create a simple Reminder react application using the REST APIs from Assignment 9  
#### User Requirements:  
```
    As a user, I should be able to see all Reminder items fetched using a REST API (from Assignment 9).
    As a user, I should be able to click a Reminder item and able to see its detailed view.
    As a user, I should be able to open add a new Reminder item view by clicking the add button.
    As a user, I should be able to add a Reminder item by entering the title, detail, and date time.
    As a user, I should be able to close a Reminder item as complete.
```
#### Technical Requirements:  
```
    The goal of this assignment is to learn about Reactjs.
    Use fetch API to fetch data from the Nodejs server from Assignment 9.
    Assignment should use SCSS for CSS.
    The assignment should use create-react-app for building the project.
    React features like props, state, and effects should be used.
    No JavaScript libraries should be used for this assignment.
```

## Description: RESTful API  

APIs available in this service

```
    // Retrieve all reminders
    GET /reminder

    // Create new reminder
    POST /reminder

    // Retrieve a single reminder by id
    GET /reminder/:id

    // Update a single reminder by id
    PUT /reminder/:id

    // Remove a single reminder by id
    DELETE /reminder/:id

```


### Backend
After connecting to mongodb, use the following command to start backend service:
```
    cd Backend
    npm i express cors debug mongoose
    notice: 
    "type":"module",
    "scripts": {
    "test": "node server.js"
    },
    npm start  
```
Open the following link to view data
(Tips: you can install extension: JSON Viewer Pro in chrome)  
    http://localhost:9002/reminder  
### Frontend
Use the following command to start frontend service:
```
    npx create-react-app reminder-app
    cd reminder-app
    npm install --save sass  
    npm install react-icons
    npm start  
```
Open the following link in your browser to view the application
    http://localhost:3000 


### Other commands may be useful:  
```
    npm init  
    npm i --save express mongoose cors 
    
    add the following property to ./Frontend/package.json file: 
    `"proxy": "http://localhost:9002"` 

    add the following property to ./Backend/package.json file: 
    `"type": "module"`

    "control + c" to stop the running server 
```

## Tools used 
1. `expressjs`  
2. `mongoosejs`  
