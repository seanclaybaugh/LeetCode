/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    
    const sumAlice = aliceSizes.reduce((val, acc)=> acc + val, 0)
    const sumBob = bobSizes.reduce((val, acc)=> acc + val, 0)
    const fairTotal = (sumAlice+sumBob) /2
    
    for (let i = 0; i < aliceSizes.length; i++) {
      const alice = aliceSizes[i];
      const bob = fairTotal - (sumAlice - alice);
      if (bobSizes.includes(bob)) {
        return [alice, bob];
      }
    }
    return []
}