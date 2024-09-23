/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if(s.length===0) return "";
    let obj={a:1,e:1,i:1,o:1,u:1,A:1,E:1,I:1,O:1,U:1},
		vow=[],
	  	res="";    
	
	//Push all vowels to a stack:
    for(let i=0;i<s.length;i++){
        if(obj[s.charAt(i)]) vow.push(s.charAt(i));
    }
	
	//Rearranging str:
    for(let el of s){
        if(obj[el]) res+=vow.pop();
        else res+=el;
    }
    return res;
    
    
    
    
};