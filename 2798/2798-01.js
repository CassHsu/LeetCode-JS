var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;

    hours.forEach(h => {
        if (h >= target) count++;
    });

    return count;
};
