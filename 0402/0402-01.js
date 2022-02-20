var removeKdigits = function(num, k) {
    const stack = [];
    
    for (const n of num) {
        while (k > 0 && stack && stack[stack.length - 1] > n) {
            stack.pop();
            k -= 1;
        }
        
        stack.push(n);
    }
    
    const arr = (k > 0) ? stack.slice(0, -k) : stack;
    let ans = "0";
    if (arr.length > 0) {
        ans = arr.join("");
        let leading0 = 0;
        for (const i in ans) {
            if (ans[i] === "0" && i != ans.length - 1) {
                leading0++;
            } else {
                break;
            }
        }
        
        if (leading0 > 0) {
            ans = ans.slice(leading0);
        }
    }
    
    return ans;
};
