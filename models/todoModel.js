
const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    listName : String,
    name : String,
    date : String,
    done : Boolean
});

const ToDoModel = mongoose.model('todos',todoSchema);

module.exports = ToDoModel;