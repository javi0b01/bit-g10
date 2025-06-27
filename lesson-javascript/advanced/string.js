'use strict';
/* String */
// Literal
const strLiteral = 'abc';

// Constructor
const strConstructor = new String('abc');
let result = typeof strConstructor;
result = strConstructor instanceof String;

// Function
const strFunction = String('abc');

/* Property */
let str = 'Hello, World!';
result = str.length;

/* Methods */
str = 'hello';
result = str[1];
result = str.at(1);
result = str.charAt(1);
result = str.charCodeAt(1);

str = 'JavaScript is fun!';
result = str.slice(11, 13);
result = str.substring(11, 13);

result = str.toUpperCase();
result = str.toLowerCase();

let str1 = 'Pepita';
let str2 = 'Pérez';
result = str1.concat(' ', str2);

str = '   Hello, World!   ';
result = str.trimStart();
result = str.trimEnd();
result = str.trim();

str = 'JavaScript';
result = str.padStart(13, 'x');
result = str.padEnd(13, '!');

result = str.repeat(2);

result = str.replace('Java', 'Type');
str = 'We love JavaScript, but JavaScript is not easy to love.';
result = str.replaceAll('Java', 'Type');

str = 'JavaScript is fun!';
result = str.split('');
result = str.split(' ');
str = 'JavaScript-is-fun!';
result = str.split('-');
str = 'a,b,c';
result = str.split(',');

str = 'We love JavaScript, but JavaScript is not easy to love.';
result = str.indexOf('love');
result = str.lastIndexOf('love');
result = str.search(/easy/);

//console.log(result);
