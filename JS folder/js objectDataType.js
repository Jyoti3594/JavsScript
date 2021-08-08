//Arrays ,Functions & Objects .



//Arrays : [] ,0 index based .
const friends =["Jasmine","Rashmi","Rani","Aashima", null, undefined,2];

//Access with index value
const bestfriend = friends[0];

console.log(friends);
console.log(bestfriend);

//change value in specific indext 
friends[5] = "Sahil";
console.log(friends[5]);






/*functions : reduce redundancy
 syntex: 'function function_Name(){
    --logic--
}' */

//function declaration
function myBff(){
    console.log('hello there jasmine');
    console.log('hello there Rashmi');
}

//function invoke
myBff();


//parameters: when declare/define
function greeting(prmtrName){
    console.log('hello there'+ ' ' + prmtrName);
}
greeting('jyoti');
greeting('sahil');


//expression - another way define a function 

function addValue(num1,num2){
    return num1+num2;
};

const add = function(num1,num2){
    return num1+num2;
};

const firstValue = add(3,4);
const secValue = add(12,12);

const values = [firstValue ,secValue ,add(4,4)];
console.log(values);



//Objects :  Properties /key value pairs methods 

const person = {
    personName: 'Jyoti' ,
    lastName: 'choudhary' , 
    age: 27,
    education: false,
    married: true,
    siblings: ['Mickey' , 'Nony'],
    greeting: function greetAll(){
            console.log('Hello my name is Jyoti');
    },
};

console.log(person.personName);
console.log(person.age);
console.log(person.education);
console.log(person.siblings[0]);
person.greeting();
