/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        const wealth = accounts[i].reduce((acc, cv) => acc += cv, 0)
        if (wealth > max){
            max = wealth
        }
    }
    return max
};