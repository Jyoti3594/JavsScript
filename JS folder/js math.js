//Math
// standered built-in objects - always available .
const numbers = 4.56789;
const result = Math.floor(numbers)

//direct passing value.
const result2= Math.floor(8.57325782);

console.log(result);
console.log(result2);


//ceil
const numbers2 = 5.12222;
const result3 = Math.ceil(numbers);
console.log(result3);

//square root
const numbers3= 89;
const result4= Math.sqrt(numbers3)
console.log(result4);

//result in PI value 
const result5=Math.PI;
console.log(result5);

//Return Minimum value 
const result6=Math.min(4,6,8,2);
console.log(result6);


//Return Maximum value 
const result7=Math.max(4,6,8,2);
console.log(result7);

//retun random value between 0 -1
const result8= Math.random();
console.log(result8);

//if you want random value 0-9  
const result9= Math.random()*10;
console.log(result9);
//if you dont want after decimal values ,use floor or ceil
const resul= Math.floor(Math.random()*10);
console.log(resul);