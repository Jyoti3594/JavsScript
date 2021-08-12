// Reference VS Value
//when assigning primitive  dataa type  value to a variable .any changes are made directly to the value ,without affecting origional value.

//when assigning non-primitive datatype value to variable  is done by reference so any changes will affect all the reference .
const numb = 4 ;
let numb2 = numb;
 
console.log(`the first value is ${numb}`);
console.log(`the first value is ${numb2}`);

 let person = { name : 'bobo'};
 let person2 = person ;
 person2.name='Jyoti';

 console.log(`the first value is ${person.name}`);
 console.log(`the first value is ${person2.name}`);