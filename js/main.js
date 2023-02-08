const year = 2023; // Number
const name = "Toddy"; // String
const isOlder = true; // Boolean true | false

// console.log(name)

// Arrays     [0, 1]
const names = ["Julian", "Mbappe"];
const ages = [32, 15, 10];
const agesAndNames = [32, 15, 10, "Hola", false];


// console.log(ages[2])

// Objects
const student = {
  name: "Juan",
  age: 56,
  isOlder: true,
  pokemons: ["Pikachu", "Charmander"],
};

// console.log(student.pokemons)

// Function definition
function sum(a, b) {
  return a + b;
}


// Call function
// console.log(sum(10, 5))

const myFunction = function (name) {
  return "Hola " + name + "!";
}

// console.log(myFunction("Pepito"))


const personA = {
  name: 'Perez',
  edad: 16
}

// false, undefined, null, 0, NaN and '' => FALSE

let couple = [
  {
    name: 'Liz',
    age: 17
  },
  {
    name: 'Pep',
    age: 18
  }
];


// Si una de las personas es mayor a 18
// pueden pasar.
if (couple[0].age >= 18 || couple[1].age >= 18) {
  // alert('Pueden pasar.')
}

// Algebra booleana
// -- OR rule
// TRUE  || TRUE   => TRUE
// TRUE  || FALSE  => TRUE
// FALSE || FALSE  => FALSE

// -- AND rule
// TRUE  && TRUE  => TRUE
// TRUE  && FALSE => FALSE
// FALSE && FALSE => FALSE

const pokemons = ['Pikachu', 'Charmander'];

// for (let i = 2; i > 0; i--) {
//   console.log(i)
// }

// const forEachArray = pokemons.forEach(function (pokemon) {
//   return pokemon.toUpperCase()
// });

// console.log(forEachArray);

// const mapArray = pokemons.map(function (pokemon) {
//   return pokemon.toUpperCase();
// });


// console.log(mapArray)


const numbers = [100, 80, 120, 30];


// const lessThanFive = numbers.filter(function (number) {
//   return number < 5;
// })

// const totalNormal = numbers[0] + numbers[1] + numbers[2] + numbers[3];

// const total = numbers.reduce(function (accumulator, number) {
//   return accumulator + number;
// }, 0);

// const luckyNumber = numbers.find(function (number) {
//   return number > 110;
// });

// String.

const button = document.querySelector('button');

button.innerText = "Sumbit";