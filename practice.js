/*
  Hello and Welcome to JavaScript Math Objects.
  I wrote this on: 09/28/2018
  My name is: Jason Sikes
  I am a first year student with: TeamTreehouse TechDegree: FullStack Web Developer with JavaScript
  You can check out my Profile at https://teamtreehouse.com/jasonsikes
  I set this up to help me practice on JavaScript functions/methods. 
  The functions/methods come from W3Schools website. https://www.w3schools.com/js/js_math.asp
  There JavaScript Tutorial website is https://www.w3schools.com/js/default.asp
*/

/*
  Set Const and call addEventListener on button
*/
const btn = document.querySelector("#btn");
btn.addEventListener("click", myFunction);

/*
  JavaScript Math Properties (Constants)
  JavaScript provides 8 mathematical constants that can be accessed with the Math object:
*/

// function myFunction(){
//   // JavaScript provides 8 mathematical constants that can be accessed with the Math object:
//   let a = Math.E;
//   let b = Math.PI;
//   let c = Math.SQRT2;
//   let d = Math.SQRT1_2;
//   let e = Math.LN2;
//   let f = Math.LN10;
//   let g = Math.LOG2E;
//   let h = Math.LOG10E;
//   document.getElementById("demo").innerHTML = `This is an example of Math.E ${a} returns Euler's Number (approx. 2.718)`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.PI ${b} returns PI (approx. 3.14)`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.SQRT2 ${c} returns the square foot of 2 (approx. 1.414)`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.SQRT1_2 ${d} returns the square root of 1/2 (approx. 0.707)`;
//   document.getElementById("demo5").innerHTML = `This is an example of Math.LN2 ${e} returns the natural logarithm of 2 (approx. 0.693)`;
//   document.getElementById("demo6").innerHTML = `This is an example of Math.LN10 ${f} returns the natural logarithm of 10 (approx. 2.302)`;
//   document.getElementById("demo7").innerHTML = `This is an example of Math.LOG2E ${g}returns the base-2 logarithm of E (approx. 1.442)`;
//   document.getElementById("demo8").innerHTML = `This is an example of Math.LOG10E ${h} returns the base-10 logarithm of E (approx. 0.434)`;
// };

/*
  JavaScript Math Object Methods

  Method:             Description:
  abs(x)              Returns the absolute value of x
  acos(x, y)          Returns the arccosine (in radians) of a number, that is
  acosh(x)            Returns the hyperbolic arccosine of x
  asin(x, y)          Returns the arcsine of x, in radians
  asinh(x)            Returns the hyperbolic arcsine of x
  atan(x, y)          Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
  atan2(x, y)         Returns the arctangent of the quotient of its arguments
  atanh(x)            Returns the hyperbolic arctangent of x
  cbrt(x)             Returns the cubic root of x
  ceil(x)             Returns x, rounded upwards to the nearest interger
  cos(x, y)           Returns the cosine of x(x is in radians)
  cosh(x)             Returns the hyperbolic cosine of x
  exp(x)              Returns the value of E<sup>x</sup>
  floor(x)            Returns x, rounded downwards to the nearest integer
  hypot(v1, v2, v3..) Returns the square root of the sum of squares of its arguments
  log(x, y)           Returns the natural logarithm (base E) of x
  max(x, y, z,.., n)  Returns the number with the highest value
  min(x, y, z,.., n)  Returns the number with the lowest value
  pow(x, y)           Returns the value of x to the power of y
  random()            Returns a random number between 0 and 1
  round(x)            Rounds x to the nearest integer
  sin(x, y)           Returns the sine of x (x is in radians)
  sinh(x)             Returns the hyperbolic sine of x
  sqrt(x)             Returns the square root of x
  tan(x)              Returns the tangent of an angle
  tanh(x)             Returns the hyperbolic tangent of a number
  trunc(x)            Returns the interger part of a number (x)
*/

/*
  Example Math.abs()
*/

// function myFunction(){
//   // Math.abs(x) returns the absolute (positive) value of x:
//   let a = Math.abs(-4.7);
//   document.getElementById("demo").innerHTML = `This is an example of Math.abs(-4.7) it returns the absolute (positive) value of -4.7 which is ${a}`;
// };

/*
  Example Math.acos()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos
*/

// function myFunction(){
//   // This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos
//   // To understand better the website above explains a little.
//   let a = calcAngle(8, 10);
//   let b = calcAngle(5, 3);
//   function calcAngle(adjacent, hypotenuse) {
//     return Math.acos(adjacent / hypotenuse);
//   }
//   document.getElementById("demo").innerHTML = `This is an example of Math.acos(8, 10) returns the arccosine (in radians) of a number, that is ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.acos(5, 3) returns the arccosine (in radians) of a number, that is ${b}`;
// };

/*
  Example Math.acosh()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh
*/

// function myFunction(){
//   // The Math.acosh() function returns the hyperbolic arc-cosine of a number, that is
//   // Math.acosh(x) = arcosh(x) = the unique y ≥ 0 such that cosh(y) = x
//   let a = Math.acosh(0.9999999999999);
//   let b = Math.acosh(1);
//   let c = Math.acosh(2);
//   let d = Math.acosh(2.5);
//   document.getElementById("demo").innerHTML = `This is an example of Math.acosh(0.999999999999) returns the hyperbolic arc-cosine of a number, that is ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.acosh(1) returns the hyperbolic arc-cosine of a number, that is ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.acosh(2) returns the hyperbolic arc-cosine of a number, that is ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.acosh(2.5) returns the hyperbolic arc-cosine of a number, that is ${d}`;
// };

/*
  Example Math.asin()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asin
*/

// function myFunction(){
//   // The Math.asin() function returns the arcsine (in radians) of a number, that is
//   // Math.asin(x) = arcsin(x) = the unique y∊ [- π/2 ; π/2] such that sin(y) = x
//   let a = calcAngle(6, 10);
//   let b = calcAngle(5, 3);
//   function calcAngle(opposite, hypotenuse) {
//     return Math.asin(opposite / hypotenuse);
//   }
//   document.getElementById("demo").innerHTML = `This is an example of Math.asin(6, 10) returns the arcsine (in radians) of a number, that is ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.asin(5, 3) returns the arcsine (in radians) of a number, that is ${b}`;
// };

/*
  Example Math.asinh()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh
*/

// function myFunction(){
//   // The Math.asinh() function returns the hyperbolic arcsine of a number, that is
//   // Math.asinh(x) = arsinh(x) = the unique y such that sinh(y) = x
//   let a = Math.asinh(1);
//   let b = Math.asinh(0);
//   let c = Math.asinh(-1);
//   let d = Math.asinh(2);
//   document.getElementById("demo").innerHTML = `This is an example Math.asinh(1) returns the hyperbolic arcsine of a number, that is ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example Math.asinh(0) returns the hyperbolic arcsine of a number, that is ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example Math.asinh(-1) returns the hyperbolic arcsine of a number, that is ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example Math.asinh(2) returns the hyperbolic arcsine of a number, that is ${d}`;
// };

/*
  Example Math.atan()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan
*/

// function myFunction(){
//   // The Math.atan() function returns the arctangent (in radians) of a number, that is
//   // Math.atan(x) = arctan(x) = the unique y∊[- π/2 ; π/2] such that tan(y) = x 
//   let a = calcAngle(8, 10);
//   let b = calcAngle(5, 3);
//   function calcAngle(opposite, adjacent){
//     return Math.atan(opposite / adjacent);
//   }
//   document.getElementById("demo").innerHTML = `This is an example of Math.atan(8, 10) returns the arctangent (in radians) of a number, that is ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.atan(5, 3) returns the arctangent (in radians) of a number, that is ${b}`;
// };

/*
  Example Math.atan2()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2
*/

// function myFunction(){
//   // The Math.atan2() function returns the angle in the plane (in radians) between the positive x-axis and the ray from (0,0) to the point (x,y), for Math.atan2(y,x).
//   let a = calcAngleDegrees(5, 5);
//   let b = calcAngleDegrees(10, 10);
//   let c = calcAngleDegrees(0, 10);
//   function calcAngleDegrees(x, y) {
//     return Math.atan2(y, x) * 180 / Math.PI;
//   }
//   document.getElementById("demo").innerHTML = `This is an example of Math.atan2(5, 5) returns the angle in the plane (in radians) between the positive x-axis and the ray from (0,0) to the point (x,y) which is ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.atan2(10, 10) returns the angle in the plane (in radians) between the positive x-axis and the ray from (0,0) to the point (x,y) which is ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.atan2(0, 10) returns the angle in the plane (in radians) between the positive x-axis and the ray from (0,0) to the point (x,y) which is ${c}`;
// };

/*
  Example Math.atanh()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh
*/

// function myFunction() {
//   // The Math.atanh() function returns the hyperbolic arctangent of a number, that is
//   // Math.atanh(x) = arctanh(x) = the unique y such that tanh(y) = x
//   let a = Math.atanh(-1);
//   let b = Math.atanh(0);
//   let c = Math.atanh(0.5);
//   let d = Math.atanh(1);
//   document.getElementById("demo").innerHTML = `This is an example of Math.atanh(-1) returns the hyperbolic arctangent of a number, that is ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.atanh(0) returns the hyperbolic arctangent of a number, that is ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.atanh(0.5) returns the hyperbolic arctangent of a number, that is ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.atanh(1) returns the hyperbolic arctangent of a number, that is ${d}`;
// };

/*
  Example Math.cbrt()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt
*/

// function myFunction(){
//   // The Math.cbrt() function returns the cube root of a number, that is
//   // Math.cbrt(x) = 3(sqrt)x = the unique y such that y(cube)3 = x
//   let a = Math.cbrt(-1);
//   let b = Math.cbrt(1);
//   let c = Math.cbrt(Infinity);
//   let d = Math.cbrt(64);
//   document.getElementById("demo").innerHTML = `This is an example of Math.cbrt(-1) returns the cube root of a number, that is ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.cbrt(1) returns the cube root of a number, that is ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.cbrt(Infinity) returns the cube root of a number, that is ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.cbrt(64) returns the cube root of a number, that is ${d}`;
// };

/*
  Example Math.ceil()
*/

// function myFunction(){
//   // Math.ceil(x) returns the value of x rounded up to its nearest integer:
//   let a = Math.ceil(4.4);
//   document.getElementById("demo").innerHTML = `This is an example of Math.ceil(4.4) it returns the value of 4.4 rounded up to its nearest integer, which is ${a}`;
// };

/*
  Example Math.cos()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos
*/

// function myFunction(){
//   // The Math.cos() static function returns the cosine of the specified angle, which must be specified in radians. This value is  length adjacent / length hypotenuse.
//   let a = getCircleX(1, 10);
//   let b = getCircleX(2, 10);
//   let c = getCircleX(Math.PI, 10);
//   function getCircleX(radians, radius) {
//     return Math.cos(radians) * radius;
//   }
//   document.getElementById("demo").innerHTML = `This is an example of Math.cos(1, 10) returns the cosine of the specified angle, which is: ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.cos(2, 10) returns the cosine of the specified angle, which is: ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.cos(Math.PI, 10) returns the cosine of the specified angle, which is: ${c}`;
// };

/*
  Example Math.cosh()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh
*/

// function myFunction(){
//   // The Math.cosh() function returns the hyperbolic cosine of a number, that can be expressed using the constant e:
//   // Math.cosh(x) = ex + e -x / 2
//   let a = Math.cosh(0);
//   let b = Math.cosh(1);
//   let c = Math.cosh(-1);
//   let d = Math.cosh(2);
//   document.getElementById("demo").innerHTML = `This is an example of Math.cosh(0)  returns the hyperbolic cosine of a number, that is: ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.cosh(1)  returns the hyperbolic cosine of a number, that is: ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.cosh(-1)  returns the hyperbolic cosine of a number, that is: ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.cosh(2)  returns the hyperbolic cosine of a number, that is: ${d}`;
// };

/*
  Example Math.exp()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/exp
*/

// function myFunction(){
//   // The Math.exp() function returns ex, where x is the argument, and e is Euler's number (also known as Napier's constant), the base of the natural logarithms.
//   let a = Math.exp(0);
//   let b = Math.exp(1);
//   let c = Math.exp(-1);
//   let d = Math.exp(2);
//   document.getElementById("demo").innerHTML = `This is an example of Math.exp(0) returns ex, where x is the argument, and e is Euler's number (also known as Napier's constant), the base of the natural logarithms, that is: ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.exp(1) returns ex, where x is the argument, and e is Euler's number (also known as Napier's constant), the base of the natural logarithms, that is: ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.exp(-1) returns ex, where x is the argument, and e is Euler's number (also known as Napier's constant), the base of the natural logarithms, that is: ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.exp(2) returns ex, where x is the argument, and e is Euler's number (also known as Napier's constant), the base of the natural logarithms, that is: ${d}`;
// };

/*
  Example Math.floor()
*/

// function myFunction(){
//   // The Math.floor() function returns the largest integer less than or equal to a given number.
//   let a = Math.floor(4.7);
//   // examples from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor below:
//   let b = Math.floor(5.95);
//   let c = Math.floor(5.05);
//   let d = Math.floor(5);
//   let e = Math.floor(-5.05);
//   document.getElementById("demo").innerHTML = `This is an example of Math.floor(4.7) returns the value of 4.7 rounded down to its nearest integer: ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.floor(5.95) returns the value of 5.95 rounded down to its nearest integer: ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.floor(5.05) returns the value of 5.05 rounded down to its nearest integer: ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.floor(5) returns the value of 5 rounded down to its nearest integer: ${d}`;
//   document.getElementById("demo5").innerHTML = `This is an example of Math.floor(-5.05) returns the value of -5.05 rounded down to its nearest integer: ${e}`;
// };

/*
  Example Math.hypot()
  This examples comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
  Calculating the hypotenuse of a right triangle, or the magnitude of a complex number, uses the formula Math.sqrt(v1*v1 + v2*v2) where v1 and v2 are either the sides of the triangle, or the real and complex values.  For calculating distance in 2 or more dimensions, simply add in more squares inside the square root sign, like Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4).  

  This function makes it a little easier and faster, you just call Math.hypot(v1, v2) , or Math.hypot(v1, v2, v3, v4, ...). 
*/

// function myFunction(){
//   let a = Math.hypot(3, 4);
//   let b = Math.hypot(5, 12);
//   let c = Math.hypot(3, 4, 5);
//   let d = Math.hypot(-5);
//   document.getElementById("demo").innerHTML = `This is an example of Math.hypot(3, 4) returns the square root of the sum of squares of its arguments, that is: ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.hypot(5, 12) returns the square root of the sum of squares of its arguments, that is: ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.hypot(3, 4, 5) returns the square root of the sum of squares of its arguments, that is: ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.hypot(-5) returns the square root of the sum of squares of its arguments, that is: ${d}`;
// };

/*
  Example Math.log()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log
  If the value of x is negative, the return value is always NaN.

  Because log() is a static method of Math, you always use it as Math.log(), rather than as a method of a Math object you created (Math is not a constructor).

  If you need the natural log of 2 or 10, use the constants Math.LN2 or Math.LN10 .  If you need a logarithm to base 2 or 10, use Math.log2() or Math.log10() .  If you need a logarithm to other bases, use Math.log(x) / Math.log(otherBase) as in the example below; you might want to precalculate 1 / Math.log(otherBase) .
*/

// function myFunction(){
//   // The Math.log() function returns the natural logarithm (base e) of a number, that is
//   // Math.log(x) = ln(x) = the unique y such that ey = x
//   let a = getBaseLog(2, 8);
//   let b = getBaseLog(5, 625);
//   function getBaseLog(x, y) {
//     return Math.log(y) / Math.log(x);
//   }
//   document.getElementById("demo").innerHTML = `This is an example of Math.log(2, 8) returns the natural logarithm (base e) of a number, that is: ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.log(5, 625) returns the natural logarithm (base e) of a number, that is: ${b}`;
// };

/*
  Example Math.max()
*/

// function myFunction(){
//   // The Math.max() function returns the largest of zero or more numbers.
//   let a = Math.max(0, 150, 30, 20, -8, -200);
//   let numberArray = [
//     40, 100, 1, 5, 25, 10
//   ]; // if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1" because of this, the sort() method will produce incorrect result when sorting numbers. You can fix this by providing a compare function:
//   numberArray.sort(function(a,b){return a - b}); // This fixes the compare function for numbers
//   let b = numberArray[numberArray.length-1]; // this will return the highest value
//   let numberArray2 = [
//     140, 300, 11, 5, 125, -10
//   ]; // this is a second array to test Math.max on an array
//   let c = Math.max(...numberArray2); // this uses Math.max on an array to return the highest number Note: if you fail to add the (..."in front of the Array") the function will return NaN.
//   let numberArray3 = [
//     500, 3, 45, 9, 757, -235
//   ]; // this is a third array to test Math.max.apply on an array
//   let d = myArrayMax(numberArray3);
//   function myArrayMax(arr){
//     // Math.max.apply to find the highest number in an array:
//     return Math.max.apply(null, arr);
//   };
//   document.getElementById("demo").innerHTML = `This is an example of Math.max(0, 150, 30, 20, -8, -200) returns the largest of zero or more numbers, which is: ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Array.sort(), which I used numberArray[40, 100, 1, 5, 25, 10] then called numberArray.sort(function(a, b){return a - b}) and then called numberArray[numberArray.length-1], this is the result: ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.max(...numberArray2), numberArray2[140, 300, 11, 5, 125, -10], which will do the same as above but a much shorter function being used. Here is what it returns: ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.max.apply(null, arr) being called on numberArray3[500, 3, 45, 9, 757, -235] ran through a function to display: ${d}`;
// };

/*
  Example Math.min()
*/

// function myFunction(){
//   // Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
//   let a = Math.min(0, 150, 30, 20, -8, -200);
//   let numberArray = [
//     40, 100, 1, 5, 25, 10
//   ]; // if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1" because of this, the sort() method will produce incorrect result when sorting numbers. You can fix this by providing a compare function:
//   numberArray.sort(function(a,b){return a - b}); // This fixes the compare function for numbers
//   let b = numberArray[0]; // this will return the highest value
//   let numberArray2 = [
//     140, 300, 11, 5, 125, -10
//   ]; // this is a second array to test Math.min on an array
//   let c = Math.min(...numberArray2); // this uses Math.max on an array to return the highest number Note: if you fail to add the (..."in front of the Array") the function will return NaN.
//   let numberArray3 = [
//     500, 3, 45, 9, 757, -235
//   ]; // this is a third array to test Math.min.apply on an array
//   let d = myArrayMin(numberArray3);
//   function myArrayMin(arr){
//     // Math.min.apply to find the lowest number in an array:
//     return Math.min.apply(null, arr);
//   };
//   document.getElementById("demo").innerHTML = `This is an example of Math.min(0, 150, 30, 20, -8, -200) returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one, which is: ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Array.sort(), which I used numberArray[40, 100, 1, 5, 25, 10] then called numberArray.sort(function(a, b){return a - b}) and then called numberArray[0], this is the result: ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.min(...numberArray2), numberArray2[140, 300, 11, 5, 125, -10], which will do the same as above but a much shorter function being used. Here is what it returns: ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.min.apply(null, arr) being called on numberArray3[500, 3, 45, 9, 757, -235] ran through a function to display: ${d}`;
// };

/*
  Example Math.pow()
*/

// function myFunction(){
//   // Math.pow(x, y) returns the value of x to the power of y:
//   let a = Math.pow(8, 2);
//   document.getElementById("demo").innerHTML = `This is an example Math.pow(8, 2) it returns 8 to the power of 2 which is ${a}`;
// };

/*
  Example Math.random()
  I also used examples from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  The Math.random() function returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
*/

// function myFunction(){
//   let a = Math.random();
//   let b = getRandomInt(5); // I changed the argument to 5 instead of 3 like website has it
//   let c = getRandomInt(10); // I changed the argument to 10 instead of 1 like the website has it
//   function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   };
//   let d = getRandomArbitrary(1, 100);
//   function getRandomArbitrary(min, max) {
//     //  returns a random number between the specified values.
//     return Math.floor(Math.random() * (max - min + 1)) + min; // the + 1 makes the max and min inclusive in the function
//   };
//   document.getElementById("demo").innerHTML = `This is an example of Math.random() which will returns a random number between 0 and 1: ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.random(5) ran through a function getRandomInt(max){return Math.floor(Math.random() * Math.floor(max))} which will return a random number between 0 and 5: ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.random(10) ran through a function getRandomInt(max){return Math.floor(Math.random() * Math.floor(max))} which will return a random number between 0 and 10: ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.random(1, 100) which a random number between 1 and 100. I ran this through a function getRadomArbitrary(min, max){return Math.floor(Math.random() * (max - min + 1)) + min} and this is the result: ${d}`;
// };

/*
  Example Math.round()
*/

// function myFunction(){
//   // Math.round(x) returns the value of x rounded to its nearest integer:
//   let a = Math.round(4.7);
//   let b = Math.round(4.4);
//   document.getElementById("demo").innerHTML = `This is an example Math.round(4.7) it returns 4.7 to the nearest integer which is ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example Math.round(4.4) it returns 4.4 to the nearest integer which is ${b}`;
// };

/*
  Example Math.sign()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
  The Math.sign() function returns the sign of a number, indicating whether the number is positive, negative or zero.
*/

// function myFunction(){
//   // The Math.sign() function returns the sign of a number, indicating whether the number is positive, negative or zero.
//   let a = Math.sign(3);
//   let b = Math.sign(-3);
//   let c = Math.sign(0);
//   let d = Math.sign("-3");
//   document.getElementById("demo").innerHTML = `This is an example of Math.sign(3) returns the sign of a number, indicating whether the number is positive (1), negative (-1) or zero (0): ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.sign(-3) returns the sign of a number, indicating whether the number is positive (1), negative (-1) or zero (0): ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.sign(0) returns the sign of a number, indicating whether the number is positive (1), negative (-1) or zero (0): ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.sign("-3") returns the sign of a number, indicating whether the number is positive (1), negative (-1) or zero (0): ${d}`;
// };

/*
  Examle Math.sin()
  I used some examples from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin
*/

// function myFunction(){
//   // The Math.sin() function returns the sine of a number.
//   let a = getCircleY(1, 10).toFixed(4); // I attached .toFixed(4) just for practice it is not required
//   let b = getCircleY(2, 10);
//   let c = getCircleY(Math.PI, 10);
//   function getCircleY(radians, radius) {
//     // returns the sine of a number.
//     return Math.sin(radians) * radius;
//   };
//   document.getElementById("demo").innerHTML =`This is an example of Math.sin(1, 10).toFixed(4) which I ran through a function getCircleY(radians, radius){return Math.sin(radians) * radius} which returns the sine of a number: ${a}`;
//   document.getElementById("demo2").innerHTML =`This is an example of Math.sin(2, 10) which I ran through a function getCircleY(radians, radius){return Math.sin(radians) * radius} which returns the sine of a number: ${b}`;
//   document.getElementById("demo3").innerHTML =`This is an example of Math.sin(Math.PI, 10) which I ran through a function getCircleY(radians, radius){return Math.sin(radians) * radius} which returns the sine of a number: ${c}`;
// };

/*
  Example Math.sinh()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh
  The Math.sinh() function returns the hyperbolic sine of a number, that can be expressed using the constant e:
  Math.sinh(x) = e(pow)x -e-x(pow) / 2
*/

// function myFunction(){
//   // The Math.sinh() function returns the hyperbolic sine of a number, that can be expressed using the constant e:
//   // Math.sinh(x) = e(pow)x - e -x(pow) / 2
//   let a = Math.sinh(0);
//   let b = Math.sinh(1);
//   let c = Math.sinh(-1);
//   let d = Math.sinh(2).toFixed(4); // I added .toFixed for practace it does not have to be used
//   document.getElementById("demo").innerHTML = `This is an example of Math.sinh(0) returns the hyperbolic sine of a number, that is: ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.sinh(1) returns the hyperbolic sine of a number, that is: ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.sinh(-1) returns the hyperbolic sine of a number, that is: ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.sinh(2).toFixed(4) returns the hyperbolic sine of a number, that is: ${d}`;
// };

/*
  Example Math.sqrt()
*/

// function myFunction(){
//   // Math.sqrt(x) returns the square root of x:
//   let a = Math.sqrt(64);
//   document.getElementById("demo").innerHTML = `This is an example of Math.sqrt(64) it returns the square root of 64 which is ${a}`;
// };

/*
  Example Math.tan()
  This example came from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan
*/

// function myFunction(){
//   // The Math.tan() function returns the tangent of a number.
//   let a = getTanFromDegrees(0);
//   let b = getTanFromDegrees(45);
//   let c = getTanFromDegrees(90);
//   function getTanFromDegrees(degrees) {
//     return Math.tan(degrees * Math.PI/180);
//   };
//   document.getElementById("demo").innerHTML = `This is an example of Math.tan(0) which I ran through a function getTanFromDegree(degrees){return Math.tan(degrees * Math.PI/180)} which returns: ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.tan(45) which I ran through a function getTanFromDegree(degrees){return Math.tan(degrees * Math.PI/180)} which returns: ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.tan(90) which I ran through a function getTanFromDegree(degrees){return Math.tan(degrees * Math.PI/180)} which returns: ${c}`;
// };

/*
  Example Math.tanh()
  This example came from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh
*/

// function myFunction(){
//   // The Math.tanh() function returns the hyperbolic tangent of a number, that is
//   // tanh x = sinhx / coshx = e(pow)x - e(pow)-x / e(pow)x + e(pow)-x = e(pow)2x - 1 / e(pow)2x + 1
//   let a = Math.tanh(-1);
//   let b = Math.tanh(0);
//   let c = Math.tanh(Infinity);
//   let d = Math.tanh(1).toFixed(4); // I added .toFixed() for practice. It does not have to be added.
//   document.getElementById("demo").innerHTML = `This is an example of Math.tanh(-1) returns the hyperbolic tangent of a number, that is: ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.tanh(0) returns the hyperbolic tangent of a number, that is: ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.tanh(Infinity) returns the hyperbolic tangent of a number, that is: ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.tanh(1).toFixed(4) returns the hyperbolic tangent of a number, that is: ${d}`;
// };

/*
  Example Math.trunc()
  This example comes from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
*/

// function myFunction(){
//   // The Math.trunc() function returns the integer part of a number by removing any fractional digits.
//   let a = Math.trunc(13.37);
//   let b = Math.trunc(42.84);
//   let c = Math.trunc(0.123);
//   let d = Math.trunc(-0.123);
//   document.getElementById("demo").innerHTML = `This is an example of Math.trunc(13.37) returns the integer part of a number by removing any fractional digits, this is the result: ${a}`;
//   document.getElementById("demo2").innerHTML = `This is an example of Math.trunc(42.84) returns the integer part of a number by removing any fractional digits, this is the result: ${b}`;
//   document.getElementById("demo3").innerHTML = `This is an example of Math.trunc(0.123) returns the integer part of a number by removing any fractional digits, this is the result: ${c}`;
//   document.getElementById("demo4").innerHTML = `This is an example of Math.trunc(-0.123) returns the integer part of a number by removing any fractional digits, this is the result: ${d}`;
// };


/*
  Thank you for checking out my practice JavaScript Math Objects functions/methods.
  I hope you enjoyed it.
  Please contact me if you find any errors so I can fix them.
  Jason Sikes
*/