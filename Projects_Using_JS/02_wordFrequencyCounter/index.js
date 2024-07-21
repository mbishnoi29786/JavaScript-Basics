document.getElementById('analyze').addEventListener("click", analyze);

function analyze()
{
    // fetching the input from the paragraph -->
    let inputParagraph = document.getElementById('inputPara').value.trim();
    findPalindroms(inputParagraph);
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

const regExForSplittingWordsAndSymbols = /(\s+|[.?!<>\/^&*()\@#!$%`~;:!@#%&{}",])/;
const regExForSplittingUsingPunctuation = /[.,?!<>]/;

function countCharacters(text) 
{
    return text.length;
}

function countWords(text)
{
    return text.split(regExForSplittingWordsAndSymbols).filter(word => word.trim() !== "");
}

function calculateWordFrequency(text)
{
    let wordFrequency = {};
    let arrayOfAllWordsAndSymbol = text.split(regExForSplittingWordsAndSymbols).filter(word => word.trim() !== "");
    arrayOfAllWordsAndSymbol.forEach(element => {
        if(wordFrequency[word])
        {
            wordFrequency[word]++;
        }
        else
        {
            wordFrequency[word] = 1;
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
    return text.split(regExForSplittingUsingPunctuation).map(ele => ele.split(' ').reverse().join(' ')).join();
}

function findPalindroms(text)
{
    let reversedWords = text.toLowerCase().split('').reverse().join('').split(' ').reverse().filter(word => !word.match(regExForSplittingUsingPunctuation));

    let allWordsWithoutPunctuation = text.split(' ').filter(word => !word.split(regExForSplittingUsingPunctuation).match(regExForSplittingUsingPunctuation));

    let palindromWords = [];

    reversedWords.forEach((word , index) => {
        if (word == allWordsWithoutPunctuation[index])
        {
            palindromWords = [...palindromWords, allWordsWithoutPunctuation[index]]
        }
    })

    console.log(palindromWords);
}

function findUniqueWords(text)
{

}

function countVowels(text)
{

}

function countVowels(text)
{

}

function countSentences(text)
{

}

function displayResults(charCount, wordCount, wordsFrequency, longestWord, reversedPara, reversedSentences, palindroms, allUpperCase, allLowerCase, uniqueWords, vowelsCount, consonantsCount, sentencesCount)
{

}