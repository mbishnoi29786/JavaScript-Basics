// real input -->
// document.getElementById('analyze').addEventListener("click", analyze);
// all the data with a demo input using node -->
let demoInput = "Hi! How are you? you looks fine tough. Mr. Manish It's really great to meet you mam . <stdio.h> is a header-file. Emergency 101. Naman aman pop &%^. man every thing in this para is unique. that's a drag i have to add new input along with the existing one to make it bigger. /<>/.$ {hlw}(hlw)";

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

analyze();

function analyze(){

    // let demoInput = document.getElementById('inputPara').value;
    let demoInput = "Hi! How are you? you looks fine tough. Mr. Manish It's really great to meet you mam. <stdio.h> is a header-file. Emergency 101. Naman aman pop &%^. man every thing in this para is unique. that's a drag i have to add new input along with the existing one to make it bigger. /<>/. $ {hlw}(hlw) {mamam} ";

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
    let regEx = /[.,?!<>\/$(){}]/;
    let filteredWords = demoInput.toLowerCase().split(' ').map((ele) => ele.split(regEx)).flat(1).filter(Boolean);  // filter function takes a callback function so it does not accespts a regEx so we used it this way.

    // Longest word --> 
    let longestWord = demoInput.split(' ').reduce((longest , currentWord)=> currentWord.length > longest.length ? currentWord : longest , "" );


    // Reverse Whole para  -->
    let reversedPara = demoInput.split('').reverse().join('');

    // Reverse Sentence Vice -->
    let reverseBySentence = demoInput.split(regEx).map(ele => ele.split(' ').reverse().join(' ')).join(' ');  // when we use split the thing we try to split gets discarded.


    // Palindrom Check -->
    let reverseWords = demoInput.toLowerCase().split('').reverse().join("").split(' ').reverse().map((ele) => ele.split(regEx)).flat(1).filter(Boolean);
    // console.log(reverseWords);
    let palindromWords = [];
    reverseWords.forEach((word ,index) =>{
        if(word === filteredWords[index]){
            // using push method of array which is mutative 
            // palindromWords.push(filteredWords[index]);

            // using spread operator
            palindromWords = [...palindromWords, filteredWords[index]];
        }
    })
    console.log(palindromWords);

    // upperCase and lowerCase change -->
    let allUpperCase = demoInput.toUpperCase();

    let allLowerCase = demoInput.toLowerCase();


    // unique words -->
    let uniqueWords = Object.keys(wordsFrequency).filter(word => wordsFrequency[word] === 1);

    // vowel and consonent count in the para-->
    let vowelCount = demoInput.match(/[AEIOU]/ig)?.length || 0;

    let consonantCount = demoInput.match(/[bcdfghjklmnpqrstvwxyz]/ig)?.length || 0;


    // Sentence Count --> 
    // Sentence Definition --> In English a sentence means --> 1.Begins with a Capital Letter 2.Ends with Terminal Punctuation
    // A regular expression that checks all the condition -->
    // for simple cases -->
    let simpleSentencesRegEx = /[A-Z][^.?!]*[.!?]/g;  // this regularExpression first checks if the sentence starts with an Capital letter and then  it  Matches zero or more characters that are not ., ?, or !. This allows for matching the content of the sentence, excluding the sentence-ending punctuation and in the end  Matches one of ., ?, or !, which signifies the end of the sentence. Global flag ensures all matches are found, not just the first one.
    let simpleSentenceExtracted = demoInput.match(simpleSentencesRegEx);
    let simpleSentenceCount = simpleSentenceExtracted.length;


    // to handle the edge cases like what if while addressing a persion with a title Mr. , Ms. and  numeric values (e.g., "The price is $5.00."), where periods are not necessarily sentence boundaries. 
    let edgeCasesSentencesRegEx = /(?<!\b(?:Mr|Dr|Ms|etc)\.)[^.?!]+[.!?]+/g;
    let edgeCaseSentenceExtracted = demoInput.match(edgeCasesSentencesRegEx);

    // showResults(charCount);

    }

function showResults(charCount){
    let charCountDiv =document.createElement('div');
    charCountDiv.setAttribute('id', 'charCount');
    charCountDiv.textContent = `Total Characters in the Paragraph :${charCount}`;
    document.getElementById('mainStatisticsDiv').appendChild(charCountDiv);
}

// took help from chatGPT -->
// let sentences = demoInput.split(/(?<!\b(?:Mr|Dr|Ms|etc)\.)[.!?](?=\s+[A-Z])/g);
// sentences = sentences.map(sentence => sentence.trim());

// console.log(sentences);