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
