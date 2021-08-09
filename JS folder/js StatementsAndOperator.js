// conditional statements
// Comparison operator > ,< , >= , <= ,== ,=== ,!= ,!===

/*syntex : 
if (write condition){
    type code which need to execute fter condition meet
}

*/
const value = 2>1;
const value2 = false;
console.log(typeof value);

if (value2){
console.log('Hello World');
}
else{
    console.log('Hello People');
}

//comparison operator example
const num1=6;
const num2=6;
const result = num1>=num1;
 const value3 = false;

 if (num1>num2){
 console.log('first number is greater than second');
 }
 else if(result){
     console.log('first number is equal to second');
 }
else{
    console.log('second number is greater');
}
//(!condtion) means is not true .
if(!value3){
    console.log('value-3  is false');
}

// == - check value only
// === - check value and type 
const value4= num1==num2;
const value5= num1===num2;
console.log(value4);
console.log(value5);