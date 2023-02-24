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

function getFee(salary) {
  const fee = 0.08;

  return fee * salary;
}

// console.log(getFee(2000));

function getChikenPrice(weight) {
  const priceChiken = weight * 12.30;
  return priceChiken;
}

// console.log(getChikenPrice(1));

function isFlood(city) {
  const cities = {
    juliaca: true,
    puno: false,
    ilave: false,
    juli: false
  }

  return cities[city]
}

console.log(isFlood('juliaca'));