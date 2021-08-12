//Functions, return ,If,Array,For loop 

const gas = [20,40,100,30];
const food = [10,40,50];

function calculateTotal(Arra){
    let total = 0;
    for( let i=0; i<Arra.length;i++){
        total+=Arra[i];
        
    }
    if(total>100){
        console.log(`whoa! you are spending way too much`);
        return total;

    }
    console.log(`you are good ,Total is less than 100`);
    return total;
}
const gasTotal = calculateTotal(gas);
console.log(gasTotal);
const foodTotal = calculateTotal(food);
console.log(foodTotal);
const randomTotal = calculateTotal([20,30,40]);
console.log(randomTotal);