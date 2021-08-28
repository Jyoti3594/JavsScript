//Submit event listner
//prevent defsults
//how to get a value

function myCode(){
 const form = document.getElementById('form');
 const names = document.getElementById('names');
 const password = document.getElementById('password');



 form.addEventListener('submit', function(e){
   e.preventDefault(); 
     console.log('form submitted');
     console.log(names.value);
     console.log(password.value);
 });
 
}