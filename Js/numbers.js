// Types of numbers  Integers, floating point numbers, doubles
// Integers -> 1, 2,122,33, 24...
// Floating point numbers -> 1.23, 3.32...
// Decimals greater numbers of decimal places.

// Binary -> 0, 1
// Octal -> 0 - 7
// Decimal -> 0 - 9
//Hexadecimal -> 0 - 9 and a - f

var myInt = 5;
var myFloat = 5.54;

console.log(typeof(myInt));         // number
console.log(typeof(myFloat));       // number

// Operators 
// Addition, subtraction, multiplication, division, Remainder(modulo), Exponent

var num1 = 5;
var num2 = 15;

// addition
console.log(num1 + num2);        // 20

// subtraction
console.log(num1 - num2);       // -10

// Multiplication 
console.log(num1 * num2);       // 75

//Division
console.log(num1 / num2);        // 0

// Remainder
console.log(num1 % num2);        // 15

// Exponent 
console.log(num1 ** num2);      // 30517578125

// post increment
console.log(num1++);        // 5
console.log(num1)           // 6

// pre increment
console.log(++num1)         // 7
console.log(num1)           // 7


// Assignment operators 
var num = 5;

console.log(num)        // 5

num += 5;       // num = num + 5
console.log(num);       // 10;

num -= 2;       // num = num - 2    => similarly    num *= 2,  num /= 2
console.log(num);       // 8

// Comparison operators

// ===, !==, <, >, <=, >=

console.log(5 === 2);       // false
console.log(5 !== 2);       // true
console.log(5 < 2);         // false
console.log(5 > 2);         // true
console.log(5 <= 2);        // false
console.log(5 >= 2);        // ture
