'use strict';
/* String */
// Literal
const numLiteral = 10;

// Constructor
const numConstructor = new Number(10);
let result = typeof numConstructor;
result = numConstructor instanceof Number;

/* Properties */
result = Number.MAX_VALUE;
result = Number.MIN_VALUE;
result = Number.NaN; // Not a Number

/* Methods */
let num = 10;
result = num.toString();

let num1 = 2;
let num2 = 3;
result = num1.toExponential(3);

num = 10.12345;
result = num.toFixed(0);
result = num.toFixed(2);

result = num.toPrecision();
result = num.toPrecision(1);
result = num.toPrecision(2);
result = num.toPrecision(3);

num = 100 + 23;
result = num.valueOf();

let str = '10.12345';
result = Number(str);
result = parseFloat(str);
result = parseInt(str);

//console.log(result);
//console.log(typeof result);
