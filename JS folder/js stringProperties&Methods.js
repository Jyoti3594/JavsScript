//string properties and methods
//wrap string object , don't memorize methods .

let text = ' Jyoti Rani';
let result= text.length;
console.log(result);

console.log(text.toLocaleLowerCase);
console.log(text.toLocaleUpperCase);
console.log(text.charAt(0));
console.log(text.charAt(text.length-1));
console.log(text.indexOf('t'));
console.log(text);
console.log(text.trim());
console.log(text.trim().toUpperCase().startsWith('Jyoti'));
console.log(text.includes('oti'));
console.log(text.slice(0,2));
console.log(text.slice('-3'));