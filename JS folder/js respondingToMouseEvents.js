/* Events in JS 

clicks - fires after full action occurs
mousedown - button is pressed
mouse up - button is released

mouseenter - move onto an element
mouseLeave - move out of an element 

*/

const heading = document.querySelector('h1');
const bttn = document.querySelector('.btn');


//mouse click
bttn.addEventListener('click',function(){
    console.log('you clicked me');
});

//mouse down
bttn.addEventListener('mousedown',function(){
    console.log('down');
});

//mouse up
bttn.addEventListener('mouseup',function(){
    console.log('up');
});


//mouse enter
heading.addEventListener('mouseenter', function(){
heading.classList.add('blue');
});

//mouse mouse leave
heading.addEventListener('mouseleave', function(){
heading.classList.remove('blue');
});