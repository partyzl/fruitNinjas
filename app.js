const express = require('express');
const app = express();

const fruitRoute = require('./controllers/fruitsController');
//app.use()


app.get('/', (req, res) =>{
    res.send('Test Success!');
})

app.use('/fruits', fruitRoute);

module.exports = app;