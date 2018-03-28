/*
# Exam Re-work
1. Generate an array of 20 random integers between 60-100 to simulate an array of 20 test scores. We can call this 
'''testscores''', Use provived fxn. getRandomIntInclusive();
2. Use provived fxn. curveScore(). Curve each score by 10 points.
3. Generating a listing of the scores in the browser.
*/

/** 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/math/random
* @param {number} min
* @param {number} max
* @return {number}
*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive along the minimum
}
/** 
* Add a specified amount to curve a score
* @param {Number} original
* @param {Number}curveAmount - amount to add for curve.
* @param {Number}
*/
function curveScore(original, curveAmount) {
  return original + curveAmount;
}
//Generate a random array

console testScores = Array.from({ length: 20 }, () => getRandomIntInclusive(60, 100));
console.log(testScores);
// Update testScores with curved scores
testScores.forEach((el, i, curveScores) => {
  curvedScores[i] = curveScore(el, 10);
});
