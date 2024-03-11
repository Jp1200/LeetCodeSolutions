/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    //returns the row given its index i.e the number above
    // should've known pascal triangle formula
    let res = [1];
    let prev = 1;
    for(let i = 1; i<=rowIndex; i++){
        let next_val = prev * (rowIndex - i + 1) / i;
        res.push(next_val);
        prev = next_val;    
    }
    return res;
};
