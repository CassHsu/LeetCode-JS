var isIsomorphic = function(s, t) {
    const m1 = new Map();
    const m2 = new Map();
    for(let i = 0; i < s.length; i++){
				if(m1[s[i]] !== m2[t[i]]) return false;
		    m1[s[i]] = i;
	      m2[t[i]] = i;         
    }
    return true;
};
