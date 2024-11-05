function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  // s is min value and t is max value for fruits to fall between
  // a is tree for apple posi
  // b is tree for orange posi
  // array integers are the distances from respective tree
  function countFruit(fruitTreePosition, fruitsPositions) {
    // direction is either 1 // -1
    // let direction = fruitTreePosition < s ? 1 : -1;
    let direction = 1;
    let fruitHit = 0;
    for (let fruitLandPosition of fruitsPositions) {
      let normalizedDistance = fruitTreePosition + direction * fruitLandPosition;
      // console.log(s,normalizedDistance,t,"direction:",direction)
      if (normalizedDistance >= s && normalizedDistance <= t) {
        fruitHit++;
      }
    }
    return fruitHit;
  }
  console.log(countFruit(a, apples));
  console.log(countFruit(b, oranges));
}
// Time complexity in best case if lengths of apples and oranges are === then O(n) since we go through each array once
// if we go through each function space complexity wise its O(n+m) since theyre scalars we arnt creating any more data than whats being provided
// if we rewrote this function considering the equal or unequal array sizes instead of making two function calls we could write:
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  // Get the maximum length of the two arrays
  const maxLength = Math.max(apples.length, oranges.length);

  for (let i = 0; i < maxLength; i++) {
    // Count apples if within bounds
    if (i < apples.length && a + apples[i] >= s && a + apples[i] <= t) {
      appleCount++;
    }

    // Count oranges if within bounds
    if (i < oranges.length && b + oranges[i] >= s && b + oranges[i] <= t) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}//where we take the max length between both arrays and count in a single for loop up until the bound of x array ;

