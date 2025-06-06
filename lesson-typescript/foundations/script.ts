//console.log('Works!');
/* Simple Types */
// Implicit - Infer
let myVariable0 = 'Pepito';
//console.log(myVariable0);

// Explicit
let myVariable1: string = 'Pepita';
//console.log(myVariable1);

// Primitives
let myString: string;
myString = 'Hello';
//console.log(myString);
let myNumber: number = 1;
//console.log(myNumber);
let myBoolean: boolean = true;
//console.log(myBoolean);

/* Special Types */
let myAny: any;
myAny = 'Hi';
myAny = 1;
myAny = false;
//console.log(myAny);

let myUnknown: unknown;
myUnknown = 'Hi';
myUnknown = 1;
myUnknown = false;
//console.log(myUnknown);

let myUndefined: undefined;
//console.log(myUndefined);

let myNull: null = null;
//console.log(myNull);

/* Arrays */
const arrString: string[] = [];
arrString.push('hello');
//console.log(arrString);

const arrNumber: number[] = [];
arrNumber.push(1);
//console.log(arrNumber);

const arrBoolean: boolean[] = [];
arrBoolean.push(true);
//console.log(arrBoolean);

const arrAny: any[] = [];
arrAny.push('hello');
arrAny.push(1);
arrAny.push(true);
//console.log(arrAny);

const arr: readonly string[] = ['abc'];
//console.log(arr);

// Inference
const arrInference = [1, 2, 3];
arrInference.push(4);
//console.log(arrInference);

// Tuple
let myTuple: [string, number, boolean];
myTuple = ['xxx', 10, true];
//console.log(myTuple);

/* Functions */
function myFunction1(param1: string, param2: number, param3: boolean): void {
  console.log(param1, param2, param3);
}
//myFunction1('works', 10, true);

function myFunction2(param1: number, param2: number): number {
  return param1 + param2;
}

let returned = myFunction2(10, 2);
//console.log(returned);

function myFunction3(param) {
  console.log(param);
}
//myFunction3('hello');
//myFunction3(10);
//myFunction3(true);

// Optional parameters
function myFunction4(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

returned = myFunction4(1, 2, 3);
//console.log(returned);
returned = myFunction4(1, 2);
//console.log(returned);

// Default parameters
function myFunction5(a: number, b: number = 2): void {
  console.log(a * b);
}

//myFunction5(2, 5);
//myFunction5(2);
