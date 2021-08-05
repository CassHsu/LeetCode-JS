var isSumEqual = function(firstWord, secondWord, targetWord) {
    const firstNum = parseInt(firstWord.split("").map(c => (c.charCodeAt(0) - 97).toString()).join(""));
    const secondNum = parseInt(secondWord.split("").map(c => (c.charCodeAt(0) - 97).toString()).join(""));
    const targetNum = parseInt(targetWord.split("").map(c => (c.charCodeAt(0) - 97).toString()).join(""));
    
    return firstNum + secondNum === targetNum;
};
