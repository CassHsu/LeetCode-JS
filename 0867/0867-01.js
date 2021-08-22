var transpose = function(matrix) {
    const ans = [];
    
    for (let c = 0; c < matrix[0].length; c++) {
        const temp = [];
        for (let r = 0; r < matrix.length; r++) {
            temp.push(matrix[r][c]);
        }
        ans.push(temp);
    }
    
    return ans;
};
