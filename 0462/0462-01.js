var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);
    const pivot = nums[Math.floor(nums.length / 2)];
    
    let moves = 0;
    for (const n of nums) {
        moves += Math.abs(n - pivot);
    }
    
    return moves;
};
