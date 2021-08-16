//Powerful Array methods --Filter--
//does retun a array
// can manuplate the size of array 
//return based on condition 

const people = [{name : 'bob' , age : 23 , position : 'developer'},
{name : 'peter' , age : 25 , position: 'designer'},
{name : 'susy' , age : 30 , position: 'The Boss'},
{name : 'Anna' , age : 35 , position: 'The Boss'}];

const youngPeople = people.filter(function (person){
  return person.age<=25;

});

const developers =  people.filter(function (person){
    return person.position === 'developer';
});

console.log(developers);
console.log(youngPeople);
