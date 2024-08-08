// all varibales -->
const randomNumber = parseInt(Math.random() * 100)
const userInput = document.getElementById('guessField');
const submit = document.getElementById('submitGuess');
const resultsDiv = document.querySelector('.resultsDiv');
const prevGuesses = document.getElementById('prevGuesses');
const remainingGuesses = document.getElementById('remainingGuesses');
const lowOrHighMessage = document.getElementById('lowOrHi');


const p = document.createElement('p');

let prevMoves = [];
let numGuess = 1;

let playGame = true;

if(playGame)
{
    submit.addEventListener('click', (e) =>
    {
        e.preventDefault();
        const guess = parseInt(userInput.value, 10);
        validateGuess(guess);
    })
}

// to validate the guess -->
function validateGuess (guess)
{
    if (isNaN(guess))
    {
        alert("Please enter a valid Number");
    }
    else if (guess < 1 || guess > 100)
    {
        alert("Please enter a number between 1 and 100");
    }
    else
    {
        prevMoves = [...prevMoves, guess];
        if (numGuess > 10)
        {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number Was ${randomNumber}`);
            endGame();
        }
        else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// to print the guess after checking -->
function checkGuess (guess)
{
    if (guess > randomNumber)
    {
        displayGuess(`Your Guess is Tooo high.`)
    }
    else if (guess < randomNumber)
    {
        displayGuess(`Your Guess is Tooo Low.`)
    }
    else if (guess === randomNumber)
    {
        displayGuess(`Your Guess Was Right!!!`);
        endGame();
    }
}

// to display guesses -->
function displayGuess (guess)
{
    userInput.value = '';
    prevGuesses.innerHTML = prevMoves;
    numGuess++;
    console.log(numGuess);
    
}

// for dom manipulation -->
function displayMessage (message)
{

}

function endGame()
{

}

function newGame()
{

}