// event object argument e,evt
//info about triggered event 
//event.type
//event.currentTarget
//this keyword
//preventDefault() - prevents default behaviour

const heading= document.querySelector('h1');
const bttn= document.querySelector('.btn');
const link = document.getElementById('link');

heading.addEventListener('click',function(event){
   console.log(event.currentTarget);
});

bttn.addEventListener('click',function(event){
   event.currentTarget.classList.add('blue');
   console.log(event.type);
});

//EVENT.PREVENTDEFAULT
function somefunct(e){
e.preventDefault();
}
link.addEventListener('click',somefunct);

//THIS KEYWORD
