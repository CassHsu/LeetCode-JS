var UndergroundSystem = function() {
    this.checkin = new Map();
    this.journey = new Map();
};

UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkin.set(id, [stationName, t]);
};

UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [startStation, startTime] = this.checkin.get(id);
    const key = startStation + "-" + stationName;
    this.checkin.delete(id);
    
    if (!this.journey.has(key)) {
        this.journey.set(key, [0, 0]);
    }
    
    let trip = this.journey.get(key);
    trip[0] += t - startTime;
    trip[1]++;
};

UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const [totalTime, totalTrips] = this.journey.get(startStation + "-" + endStation);
    return totalTime / totalTrips;
};
