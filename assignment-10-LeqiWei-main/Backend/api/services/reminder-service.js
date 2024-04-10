import Reminder from "./../models/reminderitem.js";


/**
 * 
 * @param {*} newReminder 
 * @returns {Promise<Reminder>}
 */
// save to create a new object
export const save = (newReminder) => {
        const reminder = new Reminder(newReminder);
        return reminder.save();
    }
    
export const search = (query) => {
    const params = {...query };
    return Reminder.find(params).exec();
}



//Search reminder items by id
export const get = (id) => {
    const reminder = Reminder.findById(id).exec();
    return reminder;
}


//update reminder item by id
export const update = (updatedReminder) => {
    updatedReminder.modifiedDate = new Date();
    const reminder = Reminder
        .findByIdAndUpdate(updatedReminder.id, updatedReminder, { new: true })
        .exec();
    return reminder;
}


//delete reminder item by id
export const remove = (id) => {
    const reminder = Reminder.findByIdAndDelete(id).exec();
    //return Promise
    return reminder;
}