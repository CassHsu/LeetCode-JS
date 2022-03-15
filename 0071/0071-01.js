var simplifyPath = function(path) {
    const stack = [];
    const s = path.split("/");
    
    for (const c of s) {
        if (c === "..") {
            if (stack.length > 0) {
                stack.pop();
            }
            
        } else if (c !== "" && c !== ".") {
            stack.push(c);
        }
    }
    
    return "/" + stack.join("/");
};
