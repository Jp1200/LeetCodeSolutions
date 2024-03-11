/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n%2 === 0 || n === 1){
        if (n === 1) return true;
        else {
            const twoX = Math.log2(n); 
            if (Number.isInteger(twoX)){ return true}
            else return false;
        }
    }
    else return false
};
//determines if a number is even or 1, if so takes the log of power 2 and checks if the resultant is an integer, is so it is a power of two.
