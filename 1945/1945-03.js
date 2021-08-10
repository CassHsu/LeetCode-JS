onst code0 = '0'.charCodeAt(0);
var getLucky = function(s, k) {
    let ts = convert(s);
    
    while (k > 0) {
        ts = transform(ts);
        k--;
    }
    
    return parseInt(ts);
};

var convert = function(s) {
    let ret = "";
    for (let i = 0; i < s.length; i++) {
        ret += (s.charCodeAt(i) - 96);
    }
    return ret;
};

var transform = function(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum += (s.charCodeAt(i) - code0);
    }
    
    return sum.toString();
};
