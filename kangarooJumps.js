function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if (v2 === v1) {
    return x1 === x2 ? "YES" : "NO";
  }
  if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0) { return "YES" }
  return "NO"
}
//because of the discreet nature of the question we need to check if the intersection of the points is an integer in the second if statment
// then we need to check if its non negative; if those conditions are met they will converge on some point after some number of iterations
// if we dont hit any of these if statments then we return no since non of these conditions are met.
//
