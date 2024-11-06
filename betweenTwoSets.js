function getTotalX(a, b) {
  let foundInts = 0;
  let lcmArr1 = a[0];
  for (let i = 1; i < a.length; i++) {
    lcmArr1 = lcm(lcmArr1, arr1[i])
  }
  let gcdArr2 = b[0]
  for (let i = 1; i < b.length; i++) {
    gcdArr2 = gcd(gcdArr2, b[i])
  }
  let multiple = lcmArr1;
  while (multiple <= gcdArr2) {
    if (gcdArr2 % multiple === 0) {
      foundInts++
    }
    multiple += lcmArr1;
  }
  return foundInts;
}
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
//O(nlog(M)+m) time complexity  M is max value in the arrays
//gcd computes the greastest common divisor
//lcm cpmputes the least common multiple 
//we count all the lcm for a the first array then 
//we count all the gcd for b 
//then we see how many lcms are divisible by the gcds 
//
