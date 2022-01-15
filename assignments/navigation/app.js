const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

//Home route
app.use('/home', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

//Catch all middle-ware
app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3000);