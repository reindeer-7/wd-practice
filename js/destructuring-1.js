
const student = {
  name: {
    spanish: "Juan",
    portuguese: "João"
  },
  age: 45,
  isMarried: false,
  cities: ["Puno", "Arequipa"],
};

// H: Get the spanish name using normal way.
const spanishName = student.name.spanish;

// P: Get the portuguese name using destructuring way.
const portugueseName = student.name.portuguese;

const { name } = student;
const { portuguese } = name;
// const { name: { portuguese: pName } } = student;

// L: Get the cities using destructuring way.
const { cities } = student

// Yu: Get first city using normal way.
const { cities } = student
const [firstCity] = cities

// Y: the last city using destructuring way.
const { cities: [_, secondCity], ...info } = student;
