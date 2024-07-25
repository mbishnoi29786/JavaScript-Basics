document.getElementById('analyze').addEventListener("click", analyze);

function analyze()
{
    // fetching the input from the paragraph -->
    let inputParagraph = document.getElementById('inputPara').value.trim();
    console.log(countSentences(inputParagraph));
    if(inputParagraph === '')
    {
        // if input is empty -->
        displayError('Please Enter Some text to analyze!');
        return;
    }
    else
    {
        //To Remove error message if it exists -->
        let errorDiv = document.getElementById('errorDiv');
        if (errorDiv) 
        {
            errorDiv.remove();
        }
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
    return text.match(/\w+/g).length;
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
    return palindromWords;
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
    return text.match(regEx_for_splitting_sentences)?.length || 0 ;
}

// function to create table -->
function createTable(id, headings, data) {
    let existingTable = document.getElementById(id + 'Table');
    if (existingTable) {
        existingTable.parentNode.removeChild(existingTable);
    }

    let mainStatisticsDiv = document.getElementById('mainStatisticsDiv');
    let table = document.createElement('table');
    table.setAttribute('id', id + 'Table');

    // Create thead if headings are provided
    if (headings && headings.length > 0) {
        let thead = document.createElement('thead');
        let headingRow = document.createElement('tr');
        headings.forEach(headingText => {
            let headingCell = document.createElement('th');
            headingCell.textContent = headingText;
            headingRow.appendChild(headingCell);
        });
        thead.appendChild(headingRow);
        table.appendChild(thead);
    }

    // Create tbody and populate with data rows
    if (data && data.length > 0) {
        let tbody = document.createElement('tbody');
        data.forEach(rowData => {
            let row = document.createElement('tr');
            rowData.forEach(cellData => {
                let cell = document.createElement('td');
                cell.textContent = cellData;
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
    }

    mainStatisticsDiv.appendChild(table);
}


function displayResults(charCount, wordCount, wordsFrequency, longestWord, reversedPara, reversedSentences, palindroms, allUpperCase, allLowerCase, uniqueWords, vowelsCount, consonantsCount, sentencesCount) {
    // Create table for Character Count
    createTable('charCount', ['Category', 'Count'], [
        ['Character Count', charCount]
    ]);

    // Create table for Word Count
    createTable('wordCount', ['Category', 'Count'], [
        ['Word Count', wordCount]
    ]);

    // Create table for Word Frequency
    let wordsFrequencyArray = Object.entries(wordsFrequency).map(([word, count]) => [word, count]);
    createTable('wordsFrequency', ['Word', 'Frequency'], wordsFrequencyArray);

    // Create table for Longest Word
    createTable('longestWord', ['Longest Word'], [
        [longestWord]
    ]);

    // Create table for Reversed Paragraph
    createTable('reversedPara', ['Reversed Paragraph'], [
        [reversedPara]
    ]);

    // Create table for Reversed Sentences
    let reversedSentencesArray = reversedSentences.split('.').filter(sentence => sentence.trim() !== '').map(sentence => [sentence]);
    createTable('reversedSentences', ['Reversed Sentences'], reversedSentencesArray);

    // Create table for Palindromes
    createTable('palindromes', ['Palindromes'], palindroms.map(palindrome => [palindrome]));

    // Create table for All Uppercase
    createTable('allUpperCase', ['All Uppercase'], [
        [allUpperCase]
    ]);

    // Create table for All Lowercase
    createTable('allLowerCase', ['All Lowercase'], [
        [allLowerCase]
    ]);

    // Create table for Unique Words
    let uniqueWordsArray = uniqueWords.map(word => [word]);
    createTable('uniqueWords', ['Unique Words'], uniqueWordsArray);

    // Create table for Vowels Count
    createTable('vowelsCount', ['Category', 'Count'], [
        ['Vowels Count', vowelsCount]
    ]);

    // Create table for Consonants Count
    createTable('consonantsCount', ['Category', 'Count'], [
        ['Consonants Count', consonantsCount]
    ]);

    // Create table for Sentences Count
    createTable('sentencesCount', ['Category', 'Count'], [
        ['Sentences Count', sentencesCount]
    ]);
}


function displayError()
{
    let divAlreadyExists = document.getElementById('errorDiv');
    if(divAlreadyExists)
    {
        return;
    }
    let Error = 'Please Enter a Paragraph to analyze.';
    let mainStatisticsDiv = document.getElementById('mainStatisticsDiv');
    let errorDiv = document.createElement('div');
    errorDiv.setAttribute('id', 'errorDiv');
    errorDiv.textContent = Error;
    mainStatisticsDiv.appendChild(errorDiv);
}