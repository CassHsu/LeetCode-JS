var removeDigit = function(number, digit) {
    let res = [];
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            res.push(number.slice(0, i) + number.slice(i + 1));
        }
    }
    
    return res.sort()[res.length - 1];
};
