//Array : For Loop 
const names = ['Jyoti', 'Sahil', 'Samiksha','Vinit'];
const lastName = ['Choudhary'];
const fullArray = [];

for(let i=0;i<names.length;i++){
    console.log(i);
    console.log(names[i]);
    const fullName = `${names[i]} ${lastName}`;
    fullArray.push(fullName);
}
console.log(names);
console.log(fullArray);