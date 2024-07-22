document.getElementById('analyze').addEventListener("click", analyze);

function analyze()
{
    // fetching the input from the paragraph -->
    let inputParagraph = document.getElementById('inputPara').value.trim();

    if(inputParagraph === '')
    {
        // if input is empty -->
        displayError('Please Enter Some text to analyze!');
        return;
    }

    // if input is not empty -->
    // analysis --> 
    const charCount = countCharacters(inputParagraph);
    const wordCount = countWords(inputParagraph);
    const wordsFrequency = calculateWordFrequency(inputParagraph);
    const longestWord = findLongestWord(inputParagraph);
    const reversedPara = wholeParaReverse(inputParagraph);
    const reversedSentences = sentencesReversed(inputParagraph);
    const palindroms = findPalindroms(inputParagraph);
    const allUpperCase = inputParagraph.toUpperCase();
    const allLowerCase = inputParagraph.toLowerCase();
    const uniqueWords = findUniqueWords(inputParagraph);
    const vowelsCount = countVowels(inputParagraph);
    const consonantsCount = countConsonants(inputParagraph);
    const sentencesCount = countSentences(inputParagraph);

    displayResults(charCount, wordCount, wordsFrequency, longestWord, reversedPara, reversedSentences, palindroms, allUpperCase, allLowerCase, uniqueWords, vowelsCount, consonantsCount, sentencesCount);
}

const regEx_for_splitting_wordsAndSymbols = /(\s+|[.?!<>\/^&*()\@#!$%`~;:!@#%&{}",])/;
const regEx_for_splitting_using_punctuationAndSymbol = /[.,?!<>\/$(){}]/;
const regEx_for_splitting_punctuation_only = /[.?!]/;
const regEx_for_splitting_sentences =  /(?<!\b(?:Mr|Dr|Ms|etc)\.)[^.?!]+[.!?]+/g;

function countCharacters(text) 
{
    return text.length;
}

function countWords(text)
{
    return text.split(regEx_for_splitting_wordsAndSymbols).filter(word => word.trim() !== "" || '.').length;
}

function calculateWordFrequency(text)
{
    let wordFrequency = {};
    let arrayOfAllWordsAndSymbol = text.split(regEx_for_splitting_wordsAndSymbols).filter(word => word.trim() !== "");
    arrayOfAllWordsAndSymbol.forEach(element => {
        if(wordFrequency[element])
        {
            wordFrequency[element]++;
        }
        else
        {
            wordFrequency[element] = 1;
        }
    });

    return wordFrequency;
}

function findLongestWord(text)
{
    return text.split(' ').reduce((longest, currentWord) => longest.length < currentWord.length ? currentWord : longest , "");
}

function wholeParaReverse (text)
{
    return text.split('').reverse().join('');
}

function sentencesReversed(text)
{
    return text.split(regEx_for_splitting_punctuation_only).map(ele => ele.split(' ').reverse().join(' ')).join('.');
}

function findPalindroms(text)
{
    let reversedWords = text.toLowerCase().split('').reverse().join("").split(' ').reverse().map((ele) => ele.split(regEx_for_splitting_using_punctuationAndSymbol)).flat(1).filter(Boolean);

    let allWordsWithoutPunctuation = text.toLowerCase().split(' ').map((ele) => ele.split(regEx_for_splitting_using_punctuationAndSymbol)).flat(1).filter(Boolean);
    
    let palindromWords = [];

    reversedWords.forEach((word , index) => {
        if (word == allWordsWithoutPunctuation[index])
        {
            palindromWords = [...palindromWords, allWordsWithoutPunctuation[index]]
        }
    })
}

function findUniqueWords(text)
{
    let frequency_of_words = calculateWordFrequency(text);
    return Object.keys(frequency_of_words).filter(word => frequency_of_words[word] === 1)
}

function countVowels(text)
{
    return text.match(/[AEIOU]/ig)?.length || 0;
}

function countConsonants(text)
{
    return text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/ig)?.length || 0;
}

function countSentences(text)
{
    return text.match(regEx_for_splitting_sentences).length || 0;
}

// function to create table -->
function createTable(id)
{
    let existingDiv = document.getElementById(id + 'Div');
    if (existingDiv)
    {
        return;
    }
    let mainStatisticsDiv = document.getElementById('mainStatisticsDiv');
    let div = document.createElement('div')
    div.setAttribute('id', id + 'Div');

    let table = document.createElement('table')
    table.setAttribute('id', id + 'Table');

    let thead = document.createElement('thead');
    thead.setAttribute('id', id + '_thead');

    let tbody = document.createElement('tbody');
    tbody.setAttribute('id', id + '_tbody');

    let headingRow = document.createElement('tr');
    headingRow.setAttribute('id', id + '_headingRow');

    let headingCell = document.createElement('th');
    headingCell.setAttribute('id', id + '_headingCell');


    mainStatisticsDiv.appendChild(div);
    div.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
    tbody.appendChild(headingRow);
    headingRow.appendChild(headingCell);
}

function displayResults(charCount, wordCount, wordsFrequency, longestWord, reversedPara, reversedSentences, palindroms, allUpperCase, allLowerCase, uniqueWords, vowelsCount, consonantsCount, sentencesCount)
{
    createTable('charCount');
    let charCountTable = document.getElementById('charCountTable');
    let charTableHeading = charCountTable.querySelector('thead');
    let charHeaderRow = charCountTable.querySelector('tr');
    charTableHeading.textContent = "Charcter Count"
    charHeaderRow.textContent = 'Number of Characters in Paragraph: ' + charCount;

    createTable('wordCount');
    let wordCountTable = document.getElementById('wordCountTable');
    let wordTableHeading = wordCountTable.querySelector('thead');
    let wordHeaderRow = wordCountTable.querySelector('tr');
    wordTableHeading.textContent = 'Word Count';
    wordHeaderRow.textContent = 'Number of Words in Paragraph: ' + wordCount;
    

}