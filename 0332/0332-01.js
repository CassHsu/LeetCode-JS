var findItinerary = function(tickets) {
    const m = {}
    const path = [];
    
    for (let [src, des] of tickets) {
         m[src] = [...(m[src] || []), des];
    }
    
    for (let loc in m) {
        m[loc].sort();
    }
    
    const dfs = function(n) {
        const des = m[n];
        while(des && des.length > 0) {
            dfs(des.shift());
        }
        path.push(n);
    }
    
    dfs('JFK');
    
    return path.reverse();
};
