/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let valid = true
       const check = (arr) => {
        let key = {};
        let result = false
        arr.forEach((val) => {          
            if (val !== '.') {
                if (key[val] == 1) {
                result = true;
                } else {
                key[val] = 1;
                }
            }
        })
        return result;
    }
    
    //iterate through rows 
    board.forEach((row) => {
        if (check(row)) {
            valid = false;
        }
    })
    
    //iterate through columns
    for (let i = 0; i < board.length; i++) {
        let arr = [];
        board.forEach((row) => {
            arr.push(row[i])
        })
        if (check(arr)) {
            valid = false;
        }
    }
    //iterate through boxes 
    for (let x=0; x< 8; x+=3) {
        for (let j = 0; j < 8; j+=3) {
            let square = [...board[x].slice(j, j+3), ...board[x+1].slice(j, j+3), ...board[x+2].slice(j, j+3)];
            if (check(square)) {
                valid = false;
            }
            
            
        }
    }
    
    
    return valid;
};