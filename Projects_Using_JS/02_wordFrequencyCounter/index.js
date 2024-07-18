// all the data with a demo input using node -->
let demoInput = "Hi! how are you? you looks fine tough. It's really great to meet you mam . <stdio.h> is a header-file. Emergency 101. Naman aman pop";

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
wordSymbolCount.forEach((word) => {
    if (wordsFrequency[word] == word){
        wordsFrequency[word]++;
    }
    else{
        wordsFrequency[word] = 1;
    }
});


// Longest word --> 
// let wordCountOnly = wordSymbolCount.filter()
// console.log(wordCountOnly);


// Reverse Whole papa  -->
let reversedPara = demoInput.split('').reverse().join('');
console.log(reversedPara);
// Reverse Sentence Vice -->
let reversedSentences = demoInput.split(/s*|[.]/).reverse().join();
console.log(reversedSentences);


// Palindrom Check -->
let regEx = /[.,?!<>]/;
let reverseWords = demoInput.toLowerCase().split('').reverse().join("").split(' ').reverse().filter(word => !word.match(regEx));
let filteredWords = demoInput.toLowerCase().split(' ').filter(word => !word.match(regEx));  // filter function takes a callback function so it does not accespts a regEx so we used it this way.
let palindromWords = [];
reverseWords.forEach((word ,index) =>{
    if(word === filteredWords[index]){
        // using push method of array which is mutative 
        // palindromWords.push(filteredWords[index]);

        // using spread operator
        palindromWords = [...palindromWords, filteredWords[index]];
    }
})
