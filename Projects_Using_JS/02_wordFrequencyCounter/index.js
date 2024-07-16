// let inputPara = document.getElementById('inputPara').value;  // in node we cannot define document

//Demo variable -->
let demoInput = "the quick brown-boy's fox jumps over the. ...  lazy dog.dog dog dog . <> @.#%  ";

// charaCount --> character count include spaces, line breaks etc
let charaCount = demoInput.trim().length;

// word extraction  --> extraction of all words from the string only words. in this way the . will be removed

let wordsInPara = demoInput.split(/\s+|\./).filter(Boolean);   // using boolean will remove all the falsy value 
let wordsInPara1 = demoInput.split(/\s+/);  // this one is using regular expression. here s represent character class space and + represent one or more
// console.log(`Words In Para: ${wordsInPara}`);
// console.log(wordsInPara);

// word Count --> total number of words in the para
let wordCount = wordsInPara.length;
// console.log(wordCount);

// Word Extraction better way --> in this way we can handle even the special charatcters and can keep count of them as well
let filteredPara = demoInput.split(/\s+/).filter(word => word.trim() !== '' && !(/[.,\/#!$%\^&*();:{}=\-_`~'"<>]/.test(word))); // it's better way but it will exclude all the special character form the array.
let filteredPara1 = demoInput.split(/(\s+|[.,\/#!$%\^&*();:{}=\-_`~"<>])/).filter(word => word.trim() !== '');  // in this method every special character will be separated from the string and will be kept in the array so we can also keep record of those as well.
console.log(filteredPara1);


// word frequency -- how many times a word has come in the para
let wordFrequency = {};
for(let i = 0; i<filteredPara1.length; i++){
    let count = 1;
    for (let k = i+1; k < filteredPara1.length; k++) {
        if(filteredPara1[i] === null){
            continue;
        }
        else if(filteredPara1[i]===filteredPara1[k]){
            count++;
            filteredPara1[k] = null;
        }
    }
    if(filteredPara1[i] !== null){
        wordFrequency[filteredPara1[i]] = count;
    }
}
console.log(wordFrequency);

// longest word in the para -->
/* Achieved today -->
let wordsOnly = filteredPara1.filter(word => !/[.,\/#!$%\^&*();:{}=\-_`~"<>]/.test(word));
const longestWord = wordsOnly.reduce((longest, current) => longest.length < current.length ? current : longest, "");
console.log("Longest word:", longestWord);
*/

// reverse the para -->
const reversedText = demoInput.split('').reverse().join('');
console.log(reversedText);

//Palindrom or not -->
const palindrom = demoInput === reversedText; // it will check whole para is palindrom or not 
console.log(palindrom);

// upper case para -->
const allLower = demoInput.toLowerCase();
const allUpper = demoInput.toUpperCase();
console.log(allLower);
console.log(allUpper);

// unique word --> don't have any idea do it tomorrow

//vowel or consonent -->
let vowelWords = demoInput.match(/[aeiouAEIOU]/g)?.length || 0 ;
console.log(vowelWords);

let consonantWords = demoInput.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
console.log(consonantWords);


// correct code for longest word -->
/*
// Demo variable -->
let demoInput = "the quick brown-boy's fox jumps over the. ...  lazy dog.dog dog dog . <> @.#%  ";

// Character count (including spaces, line breaks, etc.)
let charaCount = demoInput.trim().length;

// Word extraction (including punctuation as separate elements)
let filteredPara1 = demoInput.split(/(\s+|[.,\/#!$%\^&*();:{}=\-_`~"<>])/).filter(word => word.trim() !== '');
console.log("Words and punctuation:", filteredPara1);

// Word count (correct calculation based on filteredPara1)
let wordCount = filteredPara1.length;
console.log("Word count:", wordCount);

// Word frequency calculation
let wordFrequency = {};
filteredPara1.forEach(word => {
    if (/[.,\/#!$%\^&*();:{}=\-_`~"<>]/.test(word)) {
        // It's a punctuation mark
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    } else {
        // It's a word
        word = word.toLowerCase(); // Optional: normalize case
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    }
});
console.log("Word frequency:", wordFrequency);

// Longest word (ignoring punctuation)
let wordsOnly = filteredPara1.filter(word => !/[.,\/#!$%\^&*();:{}=\-_`~"<>]/.test(word));
const longestWord = wordsOnly.reduce((longest, current) => longest.length < current.length ? current : longest, "");
console.log("Longest word:", longestWord);

*/








/*

// Function to calculate word count
function countWords(text) {
    // Clean up text and split into words
    let words = text.toLowerCase().match(/\b\w+\b/g);
    return words ? words.length : 0;
}

// Function to calculate character count
function countCharacters(text) {
    return text.length;
}

// Function to calculate word frequencies
function calculateWordFrequencies(text) {
    let words = text.toLowerCase().match(/\b\w+\b/g) || [];
    let frequencies = {};
    
    words.forEach(word => {
        if (frequencies[word]) {
            frequencies[word]++;
        } else {
            frequencies[word] = 1;
        }
    });

    return frequencies;
}

// Example usage
let inputText = "The Quick brown fox jumps over the lazy dog.";
console.log("Word count:", countWords(inputText));
console.log("Character count:", countCharacters(inputText));
console.log("Word frequencies:", calculateWordFrequencies(inputText));
*/