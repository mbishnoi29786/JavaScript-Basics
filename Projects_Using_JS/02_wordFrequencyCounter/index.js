// all the data with a demo input using node -->
let demoInput = "Hi! how are you? you looks fine tough. It's really great to meet you mam . <stdio.h> is a header-file. Emergency 101. Naman aman pop &%^. man every thing in this para is unique. that's a drag i have to add new input along with the existing one to make it bigger.";

/*
// functionalities to achieve -->

1. Character Count: Count the total number of characters in the text.
2. Word Count: Count the total number of words in the text.
3. Word Frequency: Calculate the frequency of each word in the text.
4. Longest Word: Find and display the longest word in the text.
5. Reverse Text: Reverse the entire text.
6. Palindrome Check: Check if the text is a palindrome.
7. Uppercase and Lowercase Conversion: Convert the entire text to uppercase and lowercase.
8. Unique Words: Display a list of unique words.
9. Vowel and Consonant Count: Count the number of vowels and consonants in the text.
10. Sentence Count: Count the number of sentences in the text.

*/

// Character Count -->
let charCount = demoInput.trim().length;

// Word Count -->
let wordSymbolCount = demoInput.split(/(\s+|[.?!<>\/^&*()\@#!$%`~;:!@#%&{}",])/).filter(word => word.trim() !== "");

// Word Frequency -->
let wordsFrequency = {};
wordSymbolCount.forEach(word => {
    if(wordsFrequency[word]){
        wordsFrequency[word]++;
}
else{
    wordsFrequency[word] = 1;
}
})


// Regular Expression and method to get only words to get only word ->
let regEx = /[.,?!<>]/;
let filteredWords = demoInput.toLowerCase().split(' ').filter(word => !word.match(regEx));  // filter function takes a callback function so it does not accespts a regEx so we used it this way.

// Longest word --> 
let longestWord = demoInput.split(' ').reduce((longest , currentWord)=> currentWord.length > longest.length ? currentWord : longest , "" );


// Reverse Whole para  -->
let reversedPara = demoInput.split('').reverse().join('');

// Reverse Sentence Vice -->
let reverseBySentence = demoInput.split(regEx).map(ele => ele.split(' ').reverse().join(' ')).join(' ');  // when we use split the thing we try to split gets discarded.


// Palindrom Check -->

let reverseWords = demoInput.toLowerCase().split('').reverse().join("").split(' ').reverse().filter(word => !word.match(regEx));
let palindromWords = [];
reverseWords.forEach((word ,index) =>{
    if(word === filteredWords[index]){
        // using push method of array which is mutative 
        // palindromWords.push(filteredWords[index]);

        // using spread operator
        palindromWords = [...palindromWords, filteredWords[index]];
    }
})


// upperCase and lowerCase change -->
let allUpperCase = demoInput.toUpperCase();

let allLowerCase = demoInput.toLowerCase();


// unique words -->
let uniqueWords = Object.keys(wordsFrequency).filter(word => wordsFrequency[word] === 1);

// vowel and consonent count -->


