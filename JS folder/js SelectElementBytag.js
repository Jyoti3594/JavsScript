//JS - DOM - SelectElementByTag

//select the element  or group of element the we want 
//decide the effect we want to apply to the selection
// getElementByTagName('TagName');
//mode-list = array-like  object
// index, length property but not the array methods . 

const heading = document.getElementsByTagName('h2');
heading[0].style.color= 'red';
console.log(heading.length);



const items = document.getElementsByTagName('li');


items[2].style.color = 'orange';
const betteritems = [...items];

betteritems.forEach(function(item){
   // console.log(item);
}
); 

console.log(items);
console.log(betteritems);
