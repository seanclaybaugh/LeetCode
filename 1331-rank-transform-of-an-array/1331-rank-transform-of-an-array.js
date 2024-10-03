/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    
   let temp = [...arr];
  let obj = {};
  let ans = [];
  let c = 1;

  temp.sort((a,b) => a-b);  

  for(let i=0; i<temp.length; i++){
	  if(!obj[temp[i]]){
		obj[temp[i]] = c; 
		c++;
	  }
  }

  for(let i=0; i<arr.length; i++){
	  ans.push(obj[arr[i]]);
  }

  return ans;
};