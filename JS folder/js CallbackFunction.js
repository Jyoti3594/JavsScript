//CallBack function , High order function ,Function as first class objects/citizens .

/*Function are first class objects/citizens - 
 stored in a variable (expression) passed as an argument  to another function ,return 

 */

 function morning(name1){
     return `Good morning! ${name1.toUpperCase()}`;
 }
 function afternoon(name1){
     return `Good afternoon! ${name1.repeat(2)}`;
 }
 function greet(name1,cb){
     const myName = 'Jyoti';
     console.log(`${cb(name1)}, my name is ${myName}`);
 }

 greet('Mickey',morning);
 greet('Nony',afternoon);