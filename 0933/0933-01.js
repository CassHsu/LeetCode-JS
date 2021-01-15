var RecentCounter = function() {
    this.requests = [];
};

RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    const l = t - 3000;
    this.requests = this.requests.filter(x => x >= l);
    return this.requests.length;
};