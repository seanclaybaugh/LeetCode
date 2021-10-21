/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let secs = 0;
    for (let i=0; i < timeSeries.length; i++) {
        secs += duration
        if (timeSeries[i+1] <= timeSeries[i] + duration) {
            secs -= (timeSeries[i]+duration) - timeSeries[i+1]
        }
    }
    return secs;
};
