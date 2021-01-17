var longestCommonPrefix = function(strs) {
    if (strs.length == 0 || strs.filter(s => s === "").length > 0) return "";
    if (strs.length == 1) return strs[0];
    
    let prefix = strs[0];
    for (let i = 0; i < strs.length; i++) {
        while (strs[i].startsWith(prefix) === false) {
            prefix = prefix.substr(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};