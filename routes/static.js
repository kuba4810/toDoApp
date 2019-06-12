var express = require('express');
var router = express.Router();
const path = require('path');



    // Rejestracja 
    router.get('/rejestracja', (req, res) => {
        res.sendFile(path.resolve(__dirname , '../' , 'build', 'index.html'));
    });

module.exports = router;