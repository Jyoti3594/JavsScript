//   Variable Lookup 

//    {} - code block 

const globalNumber  = 5;

function add(num1 ,num2){
    const result = num1+num2+globalNumber ;
    function multiply(){
        const globalNumber = 2;
        const multi = result*globalNumber;
        console.log(multi);
 
    }
    multiply();
    return result;
}
console.log(add(3,4));