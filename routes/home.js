const express = require('express');

const app = express();

const router = express.Router();

const path = require('path');

router.get('/home', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../','views', 'home.html'))
});

module.exports = router