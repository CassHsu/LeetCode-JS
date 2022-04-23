var MyHashMap = function() {
    this.buckets = [];
    
    for (let i = 0; i <= 1000000; i++) {
        this.buckets.push(-1);
    }
};

MyHashMap.prototype.put = function(key, value) {
    this.buckets[key] = value;
};

MyHashMap.prototype.get = function(key) {
    return this.buckets[key];
};

MyHashMap.prototype.remove = function(key) {
    this.buckets[key] = -1;
};
