// Declaration with var
// These variables definition "float" all the way to the top. Also know as "Variable Hosting"

function scope1() {
  var top = "top";
  bottom = "bottom";
  console.log(bottom);

  var bottom;
}

scope1(); // prints "bottom" - no error

// the previous is the same than

function scope2() {
  var top = "top";
  var bottom;
  bottom = "bottom";
  console.log(bottom);
}
scope2(); // prints "bottom" - no error

function scope3(print) {
  if (print) {
    var insideIf = "12";
  }
  console.log(insideIf);
}

scope3(true); // prints "12" - no error

// the previous scope3 function is the same than
function scope4(print) {
  var insideIf;
  if (print) {
    insideIf = "12";
  }
  console.log(insideIf);
}

scope4(true); // prints "12" - no error

// another example
var a = 1;
function four() {
  if (true) {
    var a = 4;
  }
  console.log(a);
}

four(); // prints 4 and not the global 1

// Declaration with let "Block Scope"
function scope5(print) {
  if (print) {
    let insideIf = "12";
  }
  console.log(insideIf);
}

//scope5(true); // error "insideIf" is not defined

// Equality and Types
// typeof is the primitive operator to check the type of a variable
const is20 = false;
console.log(typeof is20); // boolean

const age = 19;
console.log(typeof age); // number

const lastName = "Bae";
console.log(typeof lastName); // string

const fruits = ["banana", "apple", "kiwi"];
console.log(typeof fruits); // object

const me = { firstName: "Sammie", lastName: "Bae" };
console.log(typeof me); // object

const nullVar = null;
console.log(typeof nullVar); // object

const function1 = function () {
  console.log(1);
};
console.log(typeof function1); // function

let blank;
console.log(typeof blank); // undefined

// Truthy/Falsy Check
let printIfTrue = "";
if (printIfTrue) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// VS
console.log("5" == 5); // prints true
console.log("5" === 5); // prints false

// Objects
let o1 = {}; // these obj have same properties and values but have different addresses in memory
let o2 = {}; // considere to use lodash library which has the isEqual(obj1, obj2) method

//console.log(o1 == o2); // prints false
console.log(o1 === o2); // prints false

function isEquivalent(a, b) {
  // array of property names
  let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);

  // If their property lengths are different, they're different objects
  if (aProps.length !== bProps.length) {
    return false;
  }

  // Checks each property
  for (let i = 0; i < aProps.length; i++) {
    const keyName = aProps[i];
    if (a[keyName] !== b[keyName]) {
      return false;
    }
  }

  // If everything matched, correct
  return true;
}

console.log(isEquivalent({ name: "John", age: 25, isMarried: true }, { name: "John", age: 25, isMarried: true })); // prints true

// The previous only works for obj with strings, numbers, booleans
const obj1 = { prop1: "test", prop2: function () {} };
const obj2 = { prop1: "test", prop2: function () {} };

console.log(isEquivalent(obj1, obj2)); // prints false

// This is because functions and arrays cannot simply use the == operator to check for equality.
const functionEx1 = function () {
  console.log(2);
};
const functionEx2 = function () {
  console.log(2);
};
console.log(functionEx1 == functionEx2); // prints 'false' due both functions have a different position in memory
