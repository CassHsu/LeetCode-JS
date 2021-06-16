var averageOfLevels = function(root) {
    const q = [root];
    const ret = [];
    
    while (q.length > 0) {
        let qlen = q.length;
        let rsum = 0;
        
        for (let i = 0; i < qlen; i++) {
            const curr = q.shift();
            rsum += curr.val;
            
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
        ret.push(rsum / qlen);
    }
    
    return ret;
};
