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
  asin(x)             Returns the arcsine of x, in radians
  asinh(x)            Returns the hyperbolic arcsine of x
  atan(x)             Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
  atan2(y,x)          Returns the arctangent of the quotient of its arguments
  atanh(x)            Returns the hyperbolic arctangent of x
  cbrt(x)             Returns the cubic root of x
  ceil(x)             Returns x, rounded upwards to the nearest interger
  cos(x)              Returns the cosine of x(x is in radians)
  cosh(x)             Returns the hyperbolic cosine of x
  exp(x)              Returns the value of E<sup>x</sup>
  floor(x)            Returns x, rounded downwards to the nearest integer
  log(x)              Returns the natural logarithm (base E) of x
  max(x, y, z,.., n)  Returns the number with the highest value
  min(x, y, z,.., n)  Returns the number with the lowest value
  pow(x, y)           Returns the value of x to the power of y
  random()            Returns a random number between 0 and 1
  round(x)            Rounds x to the nearest integer
  sin(x)              Returns the sine of x (x is in radians)
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
  Example Math.ceil()
*/

// function myFunction(){
//   // Math.ceil(x) returns the value of x rounded up to its nearest integer:
//   let a = Math.ceil(4.4);
//   document.getElementById("demo").innerHTML = `This is an example of Math.ceil(4.4) it returns the value of 4.4 rounded up to its nearest integer, which is ${a}`;
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
  Example Math.sqrt()
*/

// function myFunction(){
//   // Math.sqrt(x) returns the square root of x:
//   let a = Math.sqrt(64);
//   document.getElementById("demo").innerHTML = `This is an example of Math.sqrt(64) it returns the square root of 64 which is ${a}`;
// };


