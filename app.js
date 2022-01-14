const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('In a middleware!');
    res.send('<h1>The Add Product Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Welcome to myyyy lifeee. And express.</h1>');
});

app.listen(3000);