var LRUCache = function(capacity) {
    this.map = new Map();
    this.capacity = capacity;
};

LRUCache.prototype.get = function(key) {
    if (this.map.has(key) == false) return -1;
    
    const v = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, v);
    return v;
};

LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
        this.map.delete(this.map.keys().next().value);
    }
};
