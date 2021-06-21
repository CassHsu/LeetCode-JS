var subdomainVisits = function(cpdomains) {
    const m = new Map();
    const ret = [];
    
    for (let cp of cpdomains) {
        const cpArr = cp.split(" ");
        const count = parseInt(cpArr[0]);
        const domains = cpArr[1].split(".");
        
        let domain = domains.pop();
        m[domain] = m[domain] ? m[domain] + count: count;
        while (domains.length > 0) {
            domain = domains.pop() + "." + domain;
            m[domain] = m[domain] ? m[domain] + count: count;
        }
    }
    
    for (let domain in m) {
        ret.push(m[domain] + " " + domain);
    }
    return ret;
};
