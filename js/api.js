const response = await fetch("http://localhost:5173/data/base.json")
const json = await response.json();

console.log(json);