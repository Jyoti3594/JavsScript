//JS - Powerful Array methods --Map -- 
// It return a new array 
//it does not change the size of origional aaray 
//it use value from origional array when making new one 


const people = [{name : 'bob' , age : 23 , position : 'developer'},
{name : 'peter' , age : 25 , position: 'designer'},
{name : 'susy' , age : 30 , position: 'The Boss'}];

const ages =  people.map(function (person){
    return person.age+20;

});
console.log(ages);

const newpeople =  people.map(function (person){
    return { 
        firstName: person.name.toUpperCase(),
        oldAge: person.age+20,
    };

});
console.log(newpeople);

const peopleName = people.map (function (person){
    return  `<h1>${person.name}>/h1>`;
});
document.body.innerHTML = peopleName.join('');
console.log(peopleName);


