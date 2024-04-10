import mongoose from "mongoose";

/**
 * @author Leqi Wei
 * Schema of reminder item
 */
const reminderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    modifiedDate: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false });



// create new schema is now available
const itemsCollection = mongoose.model(`item`, reminderSchema);

export default itemsCollection;