//Events : can be Mouse scroll , single click etc .

/* 3 core principles 
- select element : 
- addEventListener()
- what event,what to do

*/

//select element
const bttn = document.querySelector('.btn');
const headding = document.querySelector('h2');


//call addeventlister
bttn.addEventListener('click',function(){
    headding.classList.add('red');
    console.log("Hey you clicked me.");

});

/*
Another of calling callBack function : 
1. create function and assign it 
2. call that variable  in addeventlistener


function changeColor(){
    console.log('hello');

}
bttn.addEventListener('click',changeColor);


*/

/*
Add If else condition in CallBack function :

function changeColor(){
   const hadColor = heading.classList.contains('.red');
   if hadColor{
       heading.classList.remove('.red');
   }
  else{
      heading.classList.add('.red');
  }
}
bttn.addEventListener('click',changeColor);
 

*/


