/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
  let chars = s.split('').sort().reverse();
  for(let i = chars.length - 1; i >= 0; i --){
      if(chars[i] === '1'){
          [chars[i], chars[chars.length - 1]] = [chars[chars.length - 1], chars[i]];
          break;
      }
  }
  return chars.join('');
};

// Method is from a different solution , my first solution was in O(n) time with large memory use this method is in O(nlogn) and O(1) space complexity 

// The methodology above makes use of the cleverness of binary numbers where we know that an ending binary number with 1 makes it odd.

// To create the largest odd binary number we just lead with as many 1's as possible and end with 1

// So this method simply splits the string, s and then sorts it and reverses it
// I.e s= "0101" -> after sort reverse -> "1100"

//Now we know that the leading 1's will make a large binary number so if we workbackwards in this reversed string until we get to the 1st 1 we simply swap its position with the last position in the split string to make that binary number odd and break so we are left with the largest odd binary number
