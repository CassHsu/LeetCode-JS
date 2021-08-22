var transpose = function(matrix) {
    const ans = [];
    
    for (const [r, row] of matrix.entries()) {
        for (const [c, val] of row.entries()) {
            if(!ans[c]) ans[c] = [];
            ans[c][r] = matrix[r][c];
        }
    }
    
    return ans;
};
