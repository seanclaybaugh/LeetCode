/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
   let area = 0;
    let end = height.length -1;
    let start = 0
    
    while (start < end) {
        let y = Math.min(height[end], height[start])
        let x = end - start
        if ( x * y > area) {
            area = x * y
        } 
        if (height[end] > height[start]) {
            start++;
        } else {
            end--;
        }
    }
    return area;
};