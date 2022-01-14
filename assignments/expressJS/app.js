const express = require('express');
const res = require('express/lib/response');

const app = express();

/* app.use((req, res, next) => {
    console.log('first');
    next();
});

app.use((req, res, next) => {
    console.log('second');
    res.send('<h1>Task 2</h1>');
}); */


app.use('/users', (req, res, next) => {
    console.log('users');
    res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
    console.log('default');
    res.send('<h1>Default</h1>');
});


app.listen(3000);