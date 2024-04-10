import itemsCollection from "./../models/reminderitem.js";


/**
 * 
 * @param {*} newItem 
 * @returns {Promise<itemsCollection>}
 */
// save to create a new object
export const save = (newItem) => {
        const item = new itemsCollection(newItem);
        return item.save();
    }
    /**
     * 
     * @param {*} query 
     * @returns {Promise<itemsCollection>}
     */
export const search = (query) => {
    const params = {...query };
    return itemsCollection.find(params).exec();
}

/**
 * 
 * @param {*} id 
 * @returns {Promise<itemsCollection>}
 */

//Search reminder items by id
export const get = (id) => {
    const item = itemsCollection.findById(id).exec();
    return item;
}

/**
 * 
 * @param {*} updatedItem 
 * @returns {Promise<itemsCollection>}
 */

//update reminder item by id
export const update = (updatedItem) => {
    updatedItem.modifiedDate = new Date();
    const item = itemsCollection
        .findByIdAndUpdate(updatedItem.id, updatedItem, { new: true })
        .exec();
    return item;
}

/**
 * 
 * @param {*} id 
 * @returns {Promise<itemsCollection>}
 */

//delete reminder item by id
export const remove = (id) => {
    const item = itemsCollection.findByIdAndDelete(id).exec();
    //return Promise
    return item;
}