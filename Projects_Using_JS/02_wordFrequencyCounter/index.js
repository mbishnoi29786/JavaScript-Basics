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
    const reversedPara = reverseText(inputParagraph);
    const palindroms = findPalindroms(inputParagraph);
    const allUpperCase = inputParagraph.toUpperCase();
    const allLowerCase = inputParagraph.toLowerCase();
    const uniqueWords = findUniqueWords(inputParagraph);
    const vowelsCount = countVowels(inputParagraph);
    const consonantsCount = countConsonants(inputParagraph);
    const sentencesCount = countSentences(inputParagraph);

    displayResults(charCount, wordCount, wordsFrequency, longestWord, reversedPara, palindroms, allUpperCase, allLowerCase, uniqueWords, vowelsCount, consonantsCount, sentencesCount);
}

function countCharacters(text) 
{
    return text.length;
}

function countWords(text)
{
    
}