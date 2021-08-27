//current target : always refer to the element to which the event handler has been attached to. 

//Target: identifies the current on which event occured.

const bttns = document.querySelectorAll('.btn');


//CURRENT TARGET
bttns.forEach(function(btn) {
  btn.addEventListener('click',function(e){
        console.log(e.currentTarget);
        e.currentTarget.style.color= 'green' ;
    });
    
});

/* Target

bttns.forEach(function(btn) {
  btn.addEventListener('click',function(e){
      console.log('target',e.target);
        console.log('currentTarget',e.currentTarget);
        e.target.style.color= 'green' ;
    });
    
});

*/