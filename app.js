const express = require('express');

const app = express();

const userRoutes = require('./routes/home');

app.use('/user',userRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found</h1>')
})

app.listen(8080)