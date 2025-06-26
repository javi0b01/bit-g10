'use strict';
/* Regular Expression */
// Literal
const regexLiteral = /abc/;
//console.log(regexLiteral);

// Constructor
const regexConstructor = new RegExp('abc');
//console.log(regexConstructor);

// Methods
let result = null;
let regexp = /abc/;
const str1 = 'abcdef';
const str2 = 'uvwxyz';

// test
result = regexp.test(str1);
result = regexp.test(str2);

// exec
result = regexp.exec(str1);
result = regexp.exec(str2);

// match
result = str1.match(regexp);
result = str2.match(regexp);

// replace
result = str1.replace(regexp, 'QWE');
result = str2.replace(regexp, 'QWE');

// split()
result = str1.split(regexp);
result = str2.split(regexp);

// Patterns
// character
regexp = /p/;
result = regexp.test('pepita');
result = regexp.test('fulanito');

// | : or
regexp = /a|b/;
result = regexp.test('abc');
result = regexp.test('acd');
result = regexp.test('bcd');
result = regexp.test('xyz');
console.log(result);

// . : any character betwwen a - b
regexp = /a.b/;
result = regexp.test('abc');
result = regexp.test('acb');

// \d : digits (0-9)
regexp = /\d/;
result = regexp.test('123');
result = regexp.test('abc');

// \D : non-digits
regexp = /\D/;
result = regexp.test('123');
result = regexp.test('abc');

// \w : Any character alphanumeric + underscore
regexp = /\w/;
result = regexp.test('Hello, World');
result = regexp.test('Hello, World!');
result = regexp.test('Hello, 123');
result = regexp.test('Hello-World');
result = regexp.test('_');
result = regexp.test('@#$');
