var matrixReshape = function(mat, r, c) {
    if (mat.length * mat[0].length != r * c) return mat;
    
    const ans = [];
    const q = [];
    for (const row of mat) {
        for (const v of row) {
            q.push(v);
        }
    }
    
    let k = 0;
    for (let i = 0; i < r; i++) {
        const row = [];
        for (let j = 0; j < c; j++) {
            row.push(q[k]);
            k++;
        }
        
        ans.push(row);
    }
    
    return ans;
};
