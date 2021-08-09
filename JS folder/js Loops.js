//Loops : repeatedly run a block of code while the conditio is true

//While loop
let amount = 10;

while(amount>0){
    console.log('I have ' + amount+" $ and I am going to buy something");
    amount--;
}

//do while loop (run at least once)

let money = 12;
do{
    console.log('You have ' + money + ' dollars');
    money++;
}
while (money <10);


//for loop
let i;
for(i=0;i<10;i++){
    console.log('The number is '+i);
}