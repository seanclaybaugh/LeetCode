/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    //to string and split 
    //remove zeros
    //join and return
    let result = '';
    let y = x.toString().split('');
    if (x < 0) {
        result += '-';
        y.shift();
    };
    while (y.length > 0) {
        result += y.pop();
    }

    if (result > Math.pow(2, 31) - 1 ){
        result = 0;
    }
    if (result < Math.pow(-2, 31)) {
        result = 0;
    }
    
    return Number(result);
};