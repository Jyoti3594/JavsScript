//Global And Local scope
/*Any variable outside the code block {} is said to be in 'global scope'
-can be  access anywhere in the program  */

let name1 = 'bobo';
name1 = 'peter';

function calculate(){
    console.log(name1);
    name1= 'orange';
    function innerName(){
        name1 = 'Pinku';
        console.log(`my name is ${name1}.`);
    
    }
  innerName();
}
calculate();

if(true){
    console.log(name1);
    name1 = 'tinku';
}
console.log(`My name is ${name1} and I am cool `);

//local Scope  - canbe access from outside code block .
//if - not VAR 
// if you do not want to make value accessible so assign const or let to t
 let name2= 'pinko';
 function calculate2(){
     const name2 = 'Jsait';
     const age = 23;
     becomesGlobal = 'global variable';
    
 }
 calculate2();
 console.log(becomesGlobal);
