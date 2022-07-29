var isAnagram = function(s, t) {
    const check = (str) => {
        return str.split('').sort().join('');
    }
    
    return check(s) == check(t);
};
