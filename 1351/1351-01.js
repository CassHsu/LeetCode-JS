var countNegatives = function(grid) {
    let count = 0;
    grid.forEach(row => {
        row.forEach(n => {
            if (n < 0) count++;
        })
    });
    return count;
};
