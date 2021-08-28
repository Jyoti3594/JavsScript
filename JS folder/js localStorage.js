//web storage API - provided by browser
//session storage  & Local storage  : 
 //both storages are same but only difference is local stoage store the data until browser get closed and s
 //session storage  save the data until  browser timout(data lost after refresh ) .

//commands : setItem ,getItem , removeItem ,clear


//localStorage.setItem(key,value);
//sessionStorage.setItem(key,value);

localStorage.setItem('Name','Jyoti');
localStorage.setItem('student','Sahil');
localStorage.setItem('address','vancouver abc');
localStorage.setItem('job','developer');

const info =localStorage.getItem('address');
console.log(info);

localStorage.removeItem('student');
const information =localStorage.getItem('student');
console.log(information);

localStorage.clear();


