/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const result = {};
    for (let i = 0; i < this.length; i++) {
        const val = fn(this[i]);
        if (result[val]) {
            result[val].push(this[i])
        } else {
            result[val] = [this[i]]
        }
    }
    return result
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */