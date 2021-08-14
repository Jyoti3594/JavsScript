//Powerful Array method - forEach
//it does not return new array .

const people = [{name : 'bob' , age : 23 , position : 'developer'},
{name : 'peter' , age : 25 , position: 'designer'},
{name : 'susy' , age : 30 , position: 'The Boss'}];

// 2 way to invoke function 

//directly invoke  by passing  - --1 way--
people.forEach(function (peopleList){
    console.log(peopleList);
})


//indirectly by creating a function first then referencing it   ---2nd way---

/*function showPerson(person){
    console.log(person);
} 
people.forEach(showPerson); */



