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
for(let i = 0; i<wordCount; i++){
    let count = 1;
    for (let k = i+1; k < wordCount; k++) {
        if(wordsInPara[i] === null){
            continue;
        }
        else if(wordsInPara[i]===wordsInPara[k]){
            count++;
            wordsInPara[k] = null;
        }
    }
    if(wordsInPara[i] !== null){
        wordFrequency[wordsInPara[i]] = count;
    }
}
// console.log(wordFrequency);













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