var express = require('express');
var router = express.Router();

const todoDAO = require('../DAO/todoDAO');

// Create new ToDo
router.post('/api/todo/create', async (request,response) => {
    try {

        let todo = await todoDAO.createNew(request.body);

        if(todo){
            response.send({
                response : 'success',
                todo : todo
            })
        } else {
            throw 'failed'
        }
        
    } catch (error) {
        console.log(error);
        response.send({
            response : 'failed'
        })
    }
})

// Delete ToDo
router.post('/api/todo/delete', async (request,response)=>{

    try {
        let todo = todoDAO.deleteToDo(request.body.id);
        if(todo){
            response.send({
                response : 'success',
                todo : todo
            })
        } else {
            throw 'failed'
        }

        
    } catch (error) {
        console.log(error);
        response.send({
            response : 'failed'
        })
    }
})

// Update ToDo
router.post('/api/todo/update', async (request,response)=>{

    try {
        let todo = todoDAO.updateToDo(request.body);
        if(todo){
            response.send({
                response : 'success',
                todo : todo
            })
        } else {
            throw 'failed'
        }

        
    } catch (error) {
        console.log(error);
        response.send({
            response : 'failed'
        })
    }
})


module.exports = router;