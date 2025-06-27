'use strict';
/* Dates
1998-03-30 ISO Date (International Standard)
03/30/1998 Short
Mar 30 1998 or 30 Mar 1998
*/

// Constructor
const dateConstructor = new Date();

let date = new Date(0);
date = new Date();
date = new Date('1998-03-03');
date = new Date('1998-03');
date = new Date('1998');
date = new Date(1998, 2, 3, 10, 33, 5, 1);
date = new Date('1999-03-30T15:33:05.001Z');

date = new Date();
let result = date.getFullYear();
result = date.getMonth();
result = date.getDate();
result = date.getDay();
result = date.getHours();
result = date.getMinutes();
result = date.getSeconds();
result = date.getMilliseconds();
result = date.getTime();
result = Date.now();

result = date.toISOString();
result = date.toLocaleString();
result = date.toLocaleDateString();
result = date.toLocaleTimeString();
console.log(result);
