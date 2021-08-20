//Previous sibling , Next sibling 

//next sibling
const first = document.querySelector('.first');
const second = (first.nextSibling.nextSibling.style.color = 'red');
console.log(second);

//previous sibling
const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);

