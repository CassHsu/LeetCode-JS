var MinStack = function() {
    this.stack = [];
    this.minlist = [];
};

MinStack.prototype.push = function(x) {
    this.stack.push(x);
    const lastMin = this.minlist.slice(-1)[0];
    if (this.minlist.length > 0 && x > lastMin) {
        this.minlist.push(lastMin);
    } else {
        this.minlist.push(x);
    }
};

MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minlist.pop();
};

MinStack.prototype.top = function() {
    return this.stack.slice(-1)[0];
};

MinStack.prototype.getMin = function() {
    return this.minlist.slice(-1)[0];
};
