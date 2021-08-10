//Array Properties and Methods
let names = ['Aashima', 'Rani' , 'Rashmi', 'Jasmine'];

//length
console.log(names.length);
console.log(names[names.length-1]);

//concat
const lastName =['Khurana','Jyoti', 'Kulasri','Khan'];
const allNames = names.concat(lastName);
console.log(allNames);

//reverse
console.log(allNames.reverse());

//unshift - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

allNames.unshift('Mickey');
allNames.unshift('choudhary');
console.log(allNames);

//shift - The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
allNames.shift();
console.log(allNames);

//push - push() method adds one or more elements to the end of an array and returns the new length of the array.
allNames.push('sahil');
console.log(allNames);

//pop - The pop method removes the last element from an array and returns that value to the caller. pop is intentionally generic; this method can be called or applied to objects resembling arrays.
allNames.pop();
allNames.pop();
console.log(allNames);

//splice - The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
const specificName = allNames.splice(4,1);
console.log(specificName);
console.log(allNames); 
