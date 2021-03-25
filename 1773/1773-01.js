var countMatches = function(items, ruleKey, ruleValue) {
    const m = new Map();
    m["type"] = 0;
    m["color"] = 1;
    m["name"] = 2;
    
    let count = 0;
    for (let item of items) {
        if (item[m[ruleKey]] === ruleValue) {
            count++;
        }
    }
    return count;
};
