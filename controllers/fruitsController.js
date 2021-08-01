const express = require('express');
const fruits = require('../data/fruits');
const router = express.Router();

guessCount = 0;

router.get('/', (req,res) =>{
    res.send('Hello and welcome to Fruit Ninjas!')
})

router.get('/guess/:userguess', (req, res)=>{
    const guess = req.params.userguess;
    if(isCorrect(guess, answer)){
        res.send(`Correct!`)
    } else{
        guessCount++;
        res.send(`Incorrect!`);
    }
})

module.exports = router;