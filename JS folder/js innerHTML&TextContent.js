//inner text - you can add html structure of adding that show the text on web page 
//Text content - you can add simple text .


const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const randomVar = 'random value';

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">${randomVar}</li>
        <li>list item</li> <li>list item</li>` ;

document.body.appendChild(ul);
