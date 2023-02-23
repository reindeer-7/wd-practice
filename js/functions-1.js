function name(params) {
  // To DO
}

function sayHello(name) {
  return "Hello " + name + "!";
}

function sayHelloWithDefault(name = "Pepe") {
  return "Hello " + name + "!";
}

function getCountryNameByCode(code) {
  const countryCodes = {
    co: "Colombia",
    pe: "Peru",
    ar: "Argentina"
  }

  return countryCodes[code];
}

function getCurrencyExchange(currency) {
  const currencyExchanges = {
    usd: 3.82,
    eur: 4.20,
    sol: 1,
    cop: 1.25
  }

  return currencyExchanges[currency];
}

/**
 * Get the last value of an array.
 *
 * examples:
 * I. [1, 2] -> 2
 * II. [15, 20, 78] -> 78
 */

function getLastValue(arr) {
  const lastIndex = arr.length - 1;

  return arr[lastIndex];
}

// H: Fn to sum 3 numbers.
function getSuma(a, b, c) {
  const sum = a + b + c;

  return sum;
}

// L: Fn to rest 3 numbers.
function getRest(a, b, c) {
  const numberRest = a - b - c;

  return numberRest;
}

// P: Fn to multiply 3 numbers.
function multiply(arr) {
  let M = arr[0] * arr[1] * arr[2];

  return M;
}

// Yu: Fn to sum 2 numbers.
function getSum(y, r) {
  const sum = y + r;

  return sum;
}

// Y: Fn to sum 2 numbers y multiply with a third one.
function getMixedOperations(a, b, c) {
  const sum = a + b;

  return sum * c;
}