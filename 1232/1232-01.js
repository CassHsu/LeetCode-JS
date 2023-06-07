var checkStraightLine = function(coordinates) {
    let x0 = coordinates[0][0];
    let y0 = coordinates[0][1];
    
    const dx = coordinates[1][0] - x0;
    const dy = coordinates[1][1] - y0;
    
    for (let i = 2; i < coordinates.length; i++) {
        let x = coordinates[i][0];
        let y = coordinates[i][1];
        
        if (dx * (y - y0) !== dy * (x - x0)) {
            return false;
        }
    }
    
    return true;
};
