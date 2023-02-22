const poke = {
  "id": 1,
  "name": {
    "english": "Bulbasaur",
    "japanese": "フシギダネ",
    "chinese": "妙蛙种子",
    "french": "Bulbizarre"
  },
  "type": ["Grass", "Poison"],
  "base": {
    "HP": 45,
    "Attack": 49,
    "Defense": 49,
    "Sp. Attack": 65,
    "Sp. Defense": 65,
    "Speed": 45
  },
  "species": "Seed Pokémon",
  "description": "Bulbasaur can be seen napping ...",
  "evolution": { "next": [["2", "Level 16"]] },
  "profile": {
    "height": "0.7 m",
    "weight": "6.9 kg",
    "egg": ["Monster", "Grass"],
    "ability": [
      ["Overgrow", "false"],
      ["Chlorophyll", "true"]
    ],
    "gender": "87.5:12.5"
  },
  "image": {
    "sprite": "https://raw.githubusercontent.com",
    "thumbnail": "https://raw.githubusercontent.com",
    "hires": "https://raw.githubusercontent.comg"
  }
};


// Yuli: Array with 3 names
// - Print the second name value.

// Henry: An studen Object with name, age and dni.
// - Print the age value.
const student = {
  name: "Jhoan",
  age: 12,
  dni: "70098065"
};

// student.age

// Paul: Array of number greather than 100
// - Print the last number value.

const numbers = [101, 340, 900, 502, 230];

console.log("Last value: " + numbers[4]);

// Lenin: A pokemon object with name, id and types.
// - Print the name value.
const pokemon = {
  "id": 1,
  "name": "Pikachu",
  "types": ["Ray"]
};

// Yesi: A currency object with symbol, name and exchange rate.
// Print the symbol value.
const currency = {
  symbol: '$',
  name: 'USD',
  exchangeRate: 3.82,
};

const country = {
  code: "PE",
  name: "Peru",
  cities: [
    {
      name: "Puno",
      region: "South",
      provinces: ["Chucuito", "El Collao"]
    },
    {
      name: "Piura",
      region: "North",
      provinces: ["Zorritos", "Talara"]
    }
  ]
};

// H: The second province of Puno.
console.log(country.cities[0].provinces[1])
// L: The region of Piura.
console.log(country.cities[1].region);
// Y: The provinces of Puno.
console.log(country.cities[0].provinces);
// P: The first province of Piura
console.log(country.cities[1].provinces[0]);
// Yu: The region of Puno
