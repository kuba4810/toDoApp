var express = require('express');
var router = express.Router();

const userDAO = require('../DAO/userDAO');


// Registration
router.post('/api/user/register', async (request, response) => {
    try {
        let login = true;
        let mail = true;

        // Check if login is available
        let user = await userDAO.findUserByLogin(request.body.login);
        if (user) {
            response.send({
                response: 'failed',
                message: 'Ta nazwa użytkownika jest już zajęta !'
            })
            login = false;
        }

        // Check if mail is available
        if (login) {
            user = await userDAO.findUserByMail(request.body.mail);
            if (user) {
                response.send({
                    response: 'failed',
                    message: 'Ten mail jest już zajęty !'
                })
                mail = false;
            }
        }

        // Create new user if login and mail are available
        if (login && mail) {
            user = await userDAO.createNew(request.body);

            if (user) {
                response.send({
                    response: 'success',
                    user: user
                });
            }
        }

    } catch (error) {
        console.log(error);
        response.send({
            response: 'failed'
        });
    }
})

// Log In
// -----------------------------------------------------------
router.post('/api/user/login', async (request, response) => {

    let login = request.body.login;
    let password = request.body.password;
    try {
        const user = await userDAO.findUser(login, password);
        if (user) {
            response.send({
                response: 'success',
                user: user
            });
        } else {
            response.send({
                response: 'failed',
                user: user
            });
        }

    } catch (err) {
        console.log(err);
        response.send({
            response: 'failed',
            message: err
        })
    }
});


module.exports = router;