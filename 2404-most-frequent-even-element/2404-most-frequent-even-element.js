/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let result = -1;
    const isEven = (n) => n%2 === 0
    const key = {};
    let max = 0;
    nums.forEach((val)=> {
        if(isEven(val)) {
            if (key[val]) {
                key[val]++
            } else {
                key[val] = 1
            }
        }
    })
    console.log(key)
    for (prop in key) {
         if (key[prop] === max && Number(result) > Number(prop)) {
             console.log(prop, 'prop' , ' val', key[prop], ' max', max)
            result = prop;
        }
        if (key[prop] > max) {
            result = Number(prop)
            max= key[prop]
        }
    }
    return result;
};