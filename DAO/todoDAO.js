const ToDoModel = require('../models/todoModel');

// Create new ToDo
async function createNew(todo){
    return Promise.resolve().then( ()=>{
        return new ToDoModel(todo).save();
    })
}

// Delete ToDo
async function deleteToDo(id){
    return Promise.resolve().then(()=>{
        return ToDoModel.findByIdAndDelete(id);
    })
}

// Update ToDo
async function updateToDo(todo){
    return Promise.resolve().then(()=>{
        return ToDoModel.findByIdAndUpdate(todo.id,todo);
    })
}


module.exports = {
    createNew : createNew,
    deleteToDo : deleteToDo,
    updateToDo : updateToDo
}