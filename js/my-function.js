function getTemperature(provinceCode) {
  const temperature = {
    pu: 10.5,
    co: 12.5,
    de: 15.6,
    az: 10.2
  }
  return temperature[provinceCode];
}

// console.log(getTemperature("co"));
// console.log(getTemperature("ca"));

function getExchange(currencyType, valueToChange) {
  const currencyTypes = {
    usd: 3.82,
    eur: 4.02
  }

  return currencyTypes[currencyType] * valueToChange;
}

console.log(getExchange("eur", 100));