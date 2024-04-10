import mongoose from "mongoose";

/**
 * @author Leqi Wei
 * Schema of reminder item
 */
const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title is required.'
    },
    description: {
        type: String,
        required: 'Description is required.'
    },
    reminderDate: {
        type: String,
        required: true
    },
    reminderTime: {
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
    },
    completed: {
        type: Boolean,
        default: false,
        required: "completed is a required property."
    }
}, { versionKey: false });


Schema.virtual('id', () => this._id.toHexString());
 Schema.set('toJSON',{ virtuals: true });

// create new schema is now available
const model = mongoose.model(`reminder`, Schema);

export default model;