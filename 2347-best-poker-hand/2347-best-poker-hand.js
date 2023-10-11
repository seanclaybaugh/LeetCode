/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    if (suits[0] == suits[1] && suits[0] == suits[2] && suits[0] == suits[3] && suits[0] == suits[4]) {
        return "Flush"
    }
    const matches = {}
    for (let i = 0; i < ranks.length; i++) {
        console.log(ranks[i])
        if (!matches[ranks[i]]) {
            matches[ranks[i]] = 1
        } else {
            matches[ranks[i]] += 1
        }
    }
    console.log(matches)
    let max = 0
    for (let x in matches) {
        if (matches[x] > max) {
            max = matches[x]
        }
    }
    if (max >= 3) {
        return "Three of a Kind"
    }
    if (max == 2) {
        return "Pair"
    }
   return "High Card"; 
};