const express = require('express');
const fruits = require('../data/fruits');
const router = express.Router();

const getAnswer = () =>{
    let idx = Math.floor(Math.random()*fruits.length);
    return fruits[idx];
}

const answer = getAnswer();

let isClueRequested = false;
let guessCount = 0;

router.get('/', (req,res) =>{
    res.send('Hello and welcome to Fruit Ninjas!')
})

router.get('/home', (req, res) =>{
    res.send('Just checking')
})

router.get('/guess/:userguess', (req, res)=>{
    const guess = req.params.userguess;
    if(isCorrect(guess, answer)){
        res.send(`Correct! Your score is ${isClueRequested ? guessCount *2 : guessCount}. You have won a box of ${guess}s`)
    } else{
        guessCount++;
        res.send(`Incorrect! ${guessCount} guesses`);
    }
})

router.get('/clue', (req, res)=>{
    isClueRequested = true;
    let str = JSON.stringify(answer);
    let arr = str.split(':');
    res.send(arr[1].slice(1,-2));
})

function getKey(str){
    result = JSON.stringify(str);
    let arr = result.split(':');
    return arr[0].slice(2,-1);
}

function isCorrect(guess, answer){
    return guess == getKey(answer) ? true : false;
}



module.exports = router;