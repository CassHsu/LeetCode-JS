var interpret = function(command) {
    return command.replace(new RegExp(/\(\)/, "g"), "o").replace(new RegExp(/\(al\)/, "g"), "al");
};
