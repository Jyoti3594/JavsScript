//Next  element Sibling 
const first = document.querySelector('.first');
const second = (first.nextElementSibling.style.color = 'red');
console.log(second);


//Previous element Sibling 
const last = document.querySelector('#last');
const third = last.previousElementSibling;
console.log(third);