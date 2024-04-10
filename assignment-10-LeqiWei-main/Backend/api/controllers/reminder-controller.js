import * as remindersService from './../services/reminder-service.js';


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
        const payload = request.body;
        if (payload.title == null || payload.description == null || payload.title.length < 1 || payload.title.length > 30 || 
            payload.description.length < 10|| payload.description.length > 100) {
                validationErrorResponse(payload, response);
                return null;
        }

        const reminder = await remindersService.save(payload);
        setPostSuccessResponse(reminder, response);

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
        const reminder_items = await remindersService.search(query);
        setSuccessResponse(reminder_items, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

//fetch data by id
export const get = async(request, response) => {
    try {
        const id = request.params.id;
        const reminder = await remindersService.get(id);
        setSuccessResponse(reminder, response);
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
        const reminder = await remindersService.update(updated);
        setSuccessResponse(reminder, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

//delete data
export const remove = async(request, response) => {
    try {
        const id = request.params.id;
        const reminder = await remindersService.remove(id);
        setSuccessResponse({ message: `Successfully Removed ${id} reminder items` }, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}