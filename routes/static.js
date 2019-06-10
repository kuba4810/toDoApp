const path = require('path');
module.exports = (app) => {

    // Logowanie 
    app.get('/cos', (req, res) => {
        res.sendFile(path.resolve(__dirname ,'client', 'todo', 'build', 'index.html'));
    });

    // app.get('/cos', function(req, res) {
    //     res.send('Hejo :D')
    //   });

}