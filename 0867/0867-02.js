var transpose = function(matrix) {
    return matrix[0].map((col, i) => matrix.map((row, j) => matrix[j][i]));
};
