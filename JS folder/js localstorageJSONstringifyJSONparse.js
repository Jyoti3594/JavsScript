//localstorage - JSON.stringify JSON.parse

const friends = ['jyoti', 'Nony', 'mickey'];

localStorage.setItem('friends',JSON.stringify(friends));
const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[2]);

let fruits;
if(localStorage.getItem('fruits')){
    fruits = JSON.parse(localStorage.getItem('fruits'));

}else{
    fruits = [];
}

console.log(fruits);
fruits.push('apple');
localStorage.setItem('fruits',JSON.stringify(fruits));