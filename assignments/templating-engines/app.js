const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');

const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.render('index', { pageTitle: 'Add User', users: users });
});

app.get('/users', (req, res, next) => {
    res.render('users', { 
        pageTitle: 'Users',
        users: users
    });
});

app.post('/add-user', (req, res, next) => {
    users.push({ username: req.body.username });
    res.redirect('/users');
});

app.listen(3000);