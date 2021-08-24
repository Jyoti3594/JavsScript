//creat

const result = document.querySelector('#result');
const first = document.querySelector('red');


//create empty element
const bodyDiv = document.createElement('div');

//create text node
const text = document.createTextNode('a simply text in body Div');
//element.appendChild(child element)
bodyDiv.appendChild(text);

document.body.insertBefore(bodyDiv, result);

//result element
const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading, first);


const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(' I am small headingtext added dynamically');

smallHeading.classList.add('red');
smallHeading.appendChild(smallText);

document.replaceChild(smallHeading,bodyDiv);
console.log(result.children);