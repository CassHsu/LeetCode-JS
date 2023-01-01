var maximumValue = function(strs) {
    let max = 0;
    const isInt = ((st) => {
        for (const c of st.split("")) {
            if (isNaN(parseInt(c))) return false;
        }
        return true;
    });

    for (const st of strs) {
        if (isInt(st)) {
            max = Math.max(max, parseInt(st));
        } else {
            max = Math.max(max, st.length);
        }
    }

    return max;
};
