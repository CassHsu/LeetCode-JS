var getLucky = function(s, k) {
    let tmp = [...s].reduce((acc, curr) => acc + (curr.charCodeAt(0) - 96).toString(10), "");
    
    while(k--) {
        tmp = [...tmp].reduce((acc, curr) => acc + parseInt(curr, 10), 0).toString(10);
    }

    return parseInt(tmp, 10);
};
