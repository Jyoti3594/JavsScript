//Implicit Type Conversion

const FirstName = "Jyoti";
const lastName = "Rani";
const fullName = FirstName + lastName;
console.log(fullName);


const numb1 = 4;
const numb2 = 10;
const result = numb1 + numb2;
console.log(result);

const value = fullName-lastName;
//operator does not work on string.
console.log(value);

//operator work with interger values 
const total =numb1-numb2;
console.log(total);

//Javascript's implicit coercion simply refers to Javascript attempting to coerce an unexpected value type to the expected type. So you can pass a string where it expects a number, an object where it expects a string etc, and it will try to convert it to the right type. This is a Javascript feature that is best avoided.

//Operator partally  try to work  if it detect interger value in string format but knot give acurate answer. 

const str1 = "12";
const str2 = "34";
console.log(str1-str2);

/*string concetanation */
console.log(str1+str2);
