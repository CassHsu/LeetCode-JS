var countStudents = function(students, sandwiches) {
    if (students.filter(s => s === 1).length === sandwiches.filter(s => s === 1).length) return 0;
    
    while (sandwiches.length > 0) {
        if (students.filter(s => sandwiches[0] === s).length === 0) break;
        
        let stu = students.shift();
        if (stu === sandwiches[0]) {
            sandwiches.shift();
        } else {
            students.push(stu);
        }
    }
    return students.length;
};