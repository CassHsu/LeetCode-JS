var diagonalSum = function(mat) {
    let sum = 0;
    let r = mat.length - 1;

    for (let l = 0, r = mat.length - 1; l < mat.length; l++, r--) {
        if (l == r) {
            sum += mat[l][r];
        } else {
            sum += mat[l][l];
            sum += mat[l][r];
        }
    }

    return sum;
};
