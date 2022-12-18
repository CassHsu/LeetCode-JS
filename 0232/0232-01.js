var MyQueue = function() {
    this.stack = [];
};

MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

MyQueue.prototype.pop = function() {
    const x = this.stack[0];
    this.stack = this.stack.slice(1, this.stack.length);
    return x;
};

MyQueue.prototype.peek = function() {
    return this.stack[0];
};

MyQueue.prototype.empty = function() {
    return this.stack.length == 0 ? true: false;
};
