var dayOfTheWeek = function(day, month, year) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = new Date(year, month - 1, day);
    return weekday[d.getDay()];
};
