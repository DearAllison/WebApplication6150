import itemsCollection from '../models/reminderitem.js';
import * as reminderService from './../services/reminder-service.js';


//500 Internal Server Error
//The server has encountered a situation it does not know how to handle
const setErrorResponse = (error, response) => {
    response.status(500);
    response.json({
        "error": {
            "msg":error
        }
    });
}

//400 validation error
const validationErrorResponse = (obj, response) => {
    response.status(400);
    response.json({
        "error": {
            "msg":obj
        }
    });
}

//200 OK 
//The request succeeded, the result meaning of "success" depends on the HTTP method;
//GET: The resource has been fetched and transmitted in the message body
//PUT or POST: The resource describing the result of the action is transmitted in the message body
const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

//post success
const setPostSuccessResponse = (obj, response) => {
    response.status(201);
    response.json(obj);
}

//add new data
export const post = async(request, response) => {
    try {
        // get the body
        const reminder = request.body;
        if (reminder.title == null || reminder.description == null || reminder.title.length < 1 || reminder.title.length > 30 || 
            reminder.description.length < 10|| reminder.description.length > 100) {
                validationErrorResponse(reminder, response);
                return null;
        }

        const item = await reminderService.save(reminder);
        setPostSuccessResponse(item, response);

    } catch (error) {
        setErrorResponse(error, response);
    }
}

//fetch data by generic parameters(title & description)
export const index = async(request, response) => {
    try {
        const title = request.params.title;
        const query = {};
        if (title) {
            query.title = title;
        }
        const reminder_items = await reminderService.search(query);
        setSuccessResponse(reminder_items, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

//fetch data by id
export const get = async(request, response) => {
    try {
        const id = request.params.id;
        const item = await reminderService.get(id);
        setSuccessResponse(item, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

//update data
export const update = async(request, response) => {
    try {
        const id = request.params.id;
        const updated = {...request.body };
        if (updated.title == null || updated.description == null || updated.title.length < 1 || updated.title.length > 30 || 
            updated.description.length < 10|| updated.description.length > 100) {
                validationErrorResponse(updated, response);
                return null;
        }
        updated.id = id;
        const item = await reminderService.update(updated);
        if(item == null){

        }
        setSuccessResponse(item, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

//delete data
export const remove = async(request, response) => {
    try {
        const id = request.params.id;
        const item = await reminderService.remove(id);
        setSuccessResponse({ message: `Successfully Removed ${id} reminder items` }, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}