var reverseVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']);
    let res = s.split("");
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (vowels.has(s.charAt(l)) && vowels.has(s.charAt(r))) {
            [res[l], res[r]] = [res[r], res[l]];
            l++;
            r--;
        } else if (!vowels.has(s.charAt(l))) {
            l++;
        } else {
            r--;
        }
    }

    return res.join("");
};
