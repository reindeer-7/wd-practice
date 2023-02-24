// Objects
const student = {
  name: "Juan",
  age: 45,
  isMarried: false,
  cities: ["Puno", "Arequipa"],
  // ...
};

// Without Destructuring
const studentName = student.name;
const studentAge = student.age;
// console.log(studentName, studentAge)

// With Destructuring assignment
// const { name, age, isMarried } = student
// console.log(name, age, isMarried);
const { isMarried, ...person } = student

// console.log(isMarried);
// console.log(person);



/**
 * Array
 */
const pokemons = ["Pikachu", "Charmander", "Psyduck"];

// Without Destructuring
const firstPokemon = pokemons[0];
const secondPokemon = pokemons[1];
// console.log(firstPokemon, secondPokemon);

// With Destructuring

// const [first, second, third] = pokemons;
// console.log(first, second, third);

const [first, ...otherPokemons] = pokemons

console.log(first)
console.log(otherPokemons)
