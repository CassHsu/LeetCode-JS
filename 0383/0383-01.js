var canConstruct = function(ransomNote, magazine) {
    const magMap = new Map();
    
    for (let i = 0; i < magazine.length; i++) {
        if (!magMap[magazine[i]]) magMap[magazine[i]] = 0;
        magMap[magazine[i]]++
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        if (!magMap[ransomNote[i]]) return false;
        magMap[ransomNote[i]]--;
        if (magMap[ransomNote[i]] < 0) return false;
    }
    
    return true;
};
