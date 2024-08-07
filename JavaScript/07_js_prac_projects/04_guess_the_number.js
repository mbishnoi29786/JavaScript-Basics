// all varibales -->
const randomNumber = parseInt(Math.random() * 100)
const userInput = document.getElementById('guessField');
const submit = document.getElementById('submitGuess');
const resultsDiv = document.querySelector('.resultsDiv');
const prevGuesses = document.getElementById('prevGuesses');
const remainingGuesses = document.getElementById('remainingGuesses');
const lowOrHighMessage = document.getElementById('lowOrHi');

const p = document.createElement('p');

let prevGame = [];
let numGuess = 1;

let playGame = true;

// to validate the guess -->
function validateGuess (guess)
{

}

// to print the guess after checking -->
function checkGuess (guess)
{

}

// to display guesses -->
function displayGuess (guess)
{

}

// for dom manipulation -->
function displayMessage (message)
{

}