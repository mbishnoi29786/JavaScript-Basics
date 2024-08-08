// all varibales -->
const randomNumber = parseInt(Math.random() * 100)
const userInput = document.getElementById('guessField');
const submit = document.getElementById('submitGuess');
const resultsDiv = document.querySelector('.resultsDiv');
const prevGuesses = document.getElementById('prevGuesses');
const remainingGuesses = document.getElementById('remainingGuesses');
const lowOrHighMessage = document.getElementById('lowOrHi');
const divChild3 = document.querySelector('div:nth-child(1)');
console.log(divChild3);
console.log(divChild3.querySelector('p:nth-child(1)'));
const firstDiv3Child = divChild3.querySelector('p:nth-child(3)');


const p = document.createElement('p');
const button = document.createElement('button');
button.id = 'restart';
button.textContent = 'Restart';
p.appendChild(button);



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
            document.querySelector('form').remove();
            firstDiv3Child.appendChild(p);
            displayMessage(`Game Over. Random Number Was ${randomNumber}`);
            endGame();
        }
        else if (numGuess > 0)
        {
            displayGuess(guess);
            checkGuess(guess);
            firstDiv3Child.appendChild(p).remove();
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
    console.log(numGuess);
}

// for dom manipulation -->
function displayMessage (message)
{

}

function endGame()
{
    playGame = false;
}

function newGame()
{
    playGame = true;
    numGuess = 10
}