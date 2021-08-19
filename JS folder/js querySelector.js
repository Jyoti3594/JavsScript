//Query Selector: selectsingle
//Query selector All : selects all


//query selector - single element
const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';


const items = document.querySelector('.special');

const lastlitem = document.querySelector('li:last-child');
console.log(lastlitem);


//QuerySelector All
const list = document.querySelectorAll('.special');

list.forEach(function(itemlist){
    console.log(itemlist);
    itemlist.style.color = "yellow";
});