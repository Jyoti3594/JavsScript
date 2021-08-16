//reduce 
//iterate,callback function
//reduce a single value - number ,array ,object.
//1 parameter('acc') - total of all calculations
// 2 parameter('curr')- current iteration, value
// add initial value 


const people = [{name : 'bob' , age : 23 , position : 'developer', id:1,salary : 200,},
{name : 'peter' , age : 25 , position: 'designer',id:2, salary : 300,},
{name : 'susy' , age : 30 , position: 'The Boss',id:3,salary : 500,},
{name : 'Anna' , age : 35 , position: 'The Boss',id:4,salary : 500,}];

const total = people.reduce(function(acc,currItem){
    console.log(`totat ${acc}`);
    console.log(`current salary: = ${currItem.salary}`);
    acc+=currItem.salary;
    return acc;
},0);

console.log(total);