//Powerful Array methods --FIND-
//return single instance - (in this case object)
//return first match , if match not found - undefined
//great for getting unique value


const people = [{name : 'bob' , age : 23 , position : 'developer', id:1},
{name : 'peter' , age : 25 , position: 'designer',id:2},
{name : 'susy' , age : 30 , position: 'The Boss',id:3},
{name : 'Anna' , age : 35 , position: 'The Boss',id:4}];

const person = people.find(function(persn){
    return persn.id===3;
});

const names= 
console.log(person);