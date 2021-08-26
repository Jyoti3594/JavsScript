//keypress - when key is press
// key down - when key is down
// key up - when key is released


const nameInput = document.getElementById('name');


//- KEYPRESS
nameInput.addEventListener('keypress',function(){
 console.log('you pressed a key.')
});

//- KEYDOWN
nameInput.addEventListener('keydown',function(){
  console.log('you pressed a key.')
}); 

// - KEYUP
nameInput.addEventListener('keyup',function(){
  console.log(nameInput.value)
});
