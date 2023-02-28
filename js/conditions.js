/**
 * Conditions!
 */

const person = {
  age: 45,
  name: 'Pancho',
  cities: ["Puno", "Juli"],
};


// Is greater than > 18 -> I can get a driving licence
// Is greater than < 18 -> I can not get a driving licence

const personAge = person.age;
const personNameSpanish = person.cities[0];

// Is greater than > 18 -> I can get a driving licence
// if (personAge > 18) {
//   console.log('She/He can!');
// } else {
//   console.log(':(');
// }

// ---
function canDrive(age, name) {
  return 15;
}

canDrive(personAge, personName)
canDrive(15)

// ---
function canDrive({ age, name }) {
  return 15;
}

canDrive({ name: "Jose", age: personAge });

