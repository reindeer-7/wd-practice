/*
  Math operations:
  - Addition
  - Subtraction
  - Multiplication
  - Division
  - Remainder (sometimes called modulo)
  - Exponent
*/

const add = 45 + 1; // 46
const subst = 10 - 2; // 8
const mult = 2 * 5; // 10
const div = 10 / 3; // 3.333
const mod = 10 % 3; // 1

const exp = 5 ** 2; // 25
const exponent = Math.pow(5, 2); // 25

// Rounded to the nearest integer.
Math.round(3.33); // 3
Math.round(3.6); // 4

// Always rounds down.
Math.floor(3.8); // 3

// Always rounds up
Math.ceil(3.1); // 4

// Absolute value of a number
Math.abs(-2); // 2
Math.abs(4); // 4


function fn(number1, number2) {
  const div = number1 / number2; // 3.33
  const round = Math.round(div); // 3

  return round;
}

/**
 * H: Fn -> Number
 *
 * fn(1, 2, 10) -> 3
 * fn(4, 5, 6) -> 9
 * fn(4, 5, 3) -> 0
 */
function getSum(a, b, c) {
  if (c % 2 === 1) {
    return 0;
  }

  const sum = a + b;
  return sum;
}

// L: Fn -> String

/**
 * Y: Fn -> Boolean
 *
 * fnBool(4) -> true
 * fnBool(3) -> false
 */
function fnBool(number) {
  if (number % 2 === 0) {
    return true;
  }

  return false;
}

/**
 * P: Fn -> Array
 *
 * fn(1, 2) -> [1, 2]
 * fn(10, 5) -> []
 * fn(7, 5) -> [7, 5]
 */
function fn(a, b) {
  const emptyArray = [];
  /* 'a' is an odd number if it's module (%) is equal to 1 */
  if ((a % 2) === 1) {
    return [a, b]
  } else {
    return emptyArray
  }
}

/**
 * Yu: Fn -> Object
 *
 * func(true) -> { marca: "Toyota" }
 * func(false) -> {}
 */
function func(isTrue) {
  if (!isTrue) {
    return {};
  }

  return {
    marca: "Toyota"
  };
}