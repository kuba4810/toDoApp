const path = require('path');
module.exports = (app) => {

    // Logowanie 
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../' ,'client', 'todo', 'build', 'index.html'));
    });

}