var daysBetweenDates = function(date1, date2) {
    const tsday = 60 * 60 * 24 * 1000;
    const d1 = new Date(date1).getTime();
    const d2 = new Date(date2).getTime();
    return Math.abs((d1 - d2) / tsday);
};
