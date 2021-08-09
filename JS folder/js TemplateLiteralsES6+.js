// JS - Template Literals - ES6
// Backtick character  ``  - (above tab,left to one)

//Interpolation ${} - insert expressions(values)

const fname = 'Jyoti';
const age = 24;

//regualr way to write 
const sentence = "hey its me  "+ fname + ' and I am ' + age + ' year old .';
console.log(sentence);

//using Backtick character 
const value = `hey I am  ${fname} and I am ${age} year old.` ;
console.log(value);