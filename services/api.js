const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    var a = 1;
    res.send(`
        <html>
            <head>
                <title>[EXPRESS-SERVER] Tasco</title>
            </head>
            <body>
                <center>
                    <img src="http://gdblogs.shu.ac.uk/b1027817/wp-content/uploads/sites/120/2014/10/peanut-062013-sb-tif.jpg" align="middle" alt="peanut">
                    <h1>Tasco API works!</h1>
                </center>
            </body>
        </html>
    `);
});

// GETALL

// GET

// CREATE

// EDIT

// DELETE

module.exports = router; 