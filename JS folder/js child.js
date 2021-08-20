// child-node - return all chil nodes including whiteSpace (which is treated as text node).
//children
//first child & Last child



// child-node
const result = document.querySelector("#result");
const allchildren = result.childNodes;
console.log('result');


//children
const children = result.children;
console.log(children);


//first child & Last child
console.log(result.firstChild);
console.log(result.lastChild);
