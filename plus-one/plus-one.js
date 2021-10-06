/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
     if (!digits || digits.length == 0) return [];
    for(let i = digits.length - 1; i >= 0; i--){
        if (digits[i] < 9){ //998->999  989->990
            digits[i]++;
            return digits;
        }
        else{
            digits[i] = 0;
        }
    }
    //only special case 999-> 1000
    let thousand = new Array(digits.length).fill(0);
    thousand.unshift(1); //add 1 in head of arr
    return thousand;
};