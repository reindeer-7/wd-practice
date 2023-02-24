// H: Create Fn to get spanish name.
// P: Create Fn to get portuguese name.
// L: Create Fn to get the number of cities.
// Yu: Create Fn to get get first city.
// Y: Create Fn to get last city.

// Destructuring

function getSpanishName(person) {
  const { name: { spanish: es } } = person;

  return es;
}

const student = {
  name: {
    spanish: "Juan",
    portuguese: "João"
  },
  age: 45,
  isMarried: false,
  cities: ["Puno", "Arequipa"],
};

console.log(getSpanishName(student));