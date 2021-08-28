/*JS Propogation , Bubbling , Capturing

-allow select dynmic elements

-event propogation: order the events are fired

-event bubbling: clicked element first and then bubbles up --default

-event capturing: fires at the root and fires until reaches target  */
const container = document.querySelector('.container');
const list = document.querySelector('.listItem');
function showBubbling(e){
    console.log('current target',e.currentTarget);
    console.log('target',e.target);
    if(e.target.classList.contains('link')){
        console.log('You clicked on a link ');
    }
    
}

function stopPropagation(e){
    console.log('you click on the link');
    e.stopPropagation();
}

 
window.onload=function(){
 list.addEventListener('click',showBubbling);

}
window.onload=function(){

container.addEventListener('click',showBubbling);
}

