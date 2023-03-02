/** 1 */
function name(params) {
  return 0;
}

/** 2 */
const name = function (params) {
  return 0;
}

/** 3  Arrow function */
const name = a => {
  return a + 5;
}

const name = (a, b) => {
  return a + b;
}

const name = (a, b) => a + b;

/**
 * Array Map.
 */

[1, 2].map(function () { }) // [undefined, undefined]

[1, 2].map(function (item) {
  return item + 2;
})

[1, 2].map((item, next) => item + 2);

const doubleNumber = function (number) {
  return number * number;
}

[1, 2].map(doubleNumber)

/**
 * Array Find
 */

[2, 3].find(function (number) {
  // Condition.
  return (number % 2) === 1
})

const isOdd = function (number) {
  // Condition.
  return (number % 2) === 1
};

// find(callback)
[2, 3].find(isOdd) // 3

[3, 4].find(function (element, index, array) { })

// 1ra: 3, 0, [3, 4]
// 2ra: 4, 1, [3, 4]


/**
 * Concat Strings.
 */

const hello = "Hola";
const world = "Mundo";

const text = hello + " " + world; // Hola Mundo

// Literal template
const textLiteral = `${hello} ${world}`; // Hola Mundo



/**
 * Array Reduce.
 */

// [].reduce(function (accumulator, currentValue) { /* … */ }, initialValue)

// ["Peru", "Colombia", "Peru", "Ecuador"] -> ["Peru", "Colombia", "Ecuador"]
const removeDuplicatedCountries = function (accumulator, currentValue) {
  // Check if the country is in the accumulator array.

  // 1ra: [], "Peru", undefined.
  // 2da: ["Peru"], "Colombia", undefined
  // 3ra: ["Peru", "Colombia"], "Peru", "Peru"
  // 4ta: ["Peru", "Colombia"], "Ecuador", undefined

  const foundedElement = accumulator.find(country => country === currentValue);

  if (!foundedElement) {
    accumulator.push(currentValue);
  }

  return accumulator;
};

const initialValue = [];

["Peru", "Colombia", "Peru", "Ecuador"].reduce(removeDuplicatedCountries, initialValue);


```
H:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat

P:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

Y:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

Yu:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

L:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

J:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

```