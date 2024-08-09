// all varibales -->
let randomNumber = parseInt(Math.random() * 100)
const userInput = document.getElementById('guessField');
const submit = document.getElementById('submitGuess');
const resultsDiv = document.querySelector('.resultsDiv');
const prevGuesses = document.getElementById('prevGuesses');
const remainingGuesses = document.getElementById('remainingGuesses');
const showMessage = document.getElementById('showMessage');
const wrapper = document.getElementById('wrapper');
const body = document.querySelector('body');
const form = document.querySelector('form');
let restartButtonExists ;

console.log(randomNumber);

const p = document.createElement('p');
p.id = 'restartPara';
const button = document.createElement('button');
button.id = 'restart';
button.textContent = 'Restart';
p.appendChild(button);

const messagePara = document.createElement('p');


let prevMoves = [];
let numGuess = 10;

let playGame = true;

remainingGuesses.textContent = numGuess;

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
        console.log(numGuess);
        if (numGuess < 1)
        {
            displayMessage(`Game Over. Random Number Was ${randomNumber}`);
            endGame();
        }
        else if (numGuess > 0)
        {
            displayGuess(guess);
            checkGuess(guess);
            if (restartButtonExists != null)
            {
            document.getElementById('restartPara').remove();
            }
        }

        remainingGuesses.textContent = numGuess;
    }
}

// to print the guess after checking -->
function checkGuess (guess)
{
    if (guess > randomNumber)
    {
        displayMessage(`Your Guess is Tooo high.`)
    }
    else if (guess < randomNumber)
    {
        displayMessage(`Your Guess is Tooo Low.`)
    }
    else if (guess === randomNumber)
    {
        displayMessage(`Your Guess Was Right!!!`);
        endGame();
    }
}

// to display guesses -->
function displayGuess (guess)
{
    userInput.value = '';
    prevGuesses.innerHTML = prevMoves;
    numGuess--;
}

// for dom manipulation -->
function displayMessage (message)
{
    messagePara.textContent = message;
    showMessage.appendChild(messagePara);
}

function endGame()
{
    playGame = false;
    document.querySelector('form').remove();
    body.appendChild(p);
    restartButtonExists = document.getElementById('restartPara');
    console.log(restartButtonExists);
    
    if (restartButtonExists != null)
        {
            restartButtonExists.addEventListener('click', newGame);
        }
}

function newGame()
{
    playGame = true;
    numGuess = 10;
    prevGuesses.textContent = '';
    prevMoves = [];
    displayMessage('');
    document.getElementById('restartPara').remove();
    wrapper.appendChild(form);
    randomNumber = parseInt(Math.random() * 100);
}


