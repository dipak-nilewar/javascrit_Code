function addtwonumber(a,b=0){
    // if(typeof b ==="undefined"){
    //     b = 0 ;
    // }
    return a+b;
}
const sum = addtwonumber(4);
console.log(sum)



// Rest parameter

function myfunc(a,b,c){
console.log(`a is ${a}`)
console.log(`b is ${b}`)
console.log(`a is ${c}`)
}
myfunc(10,20,30,40,50,50,60,70);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
    total = total + number;

    }
return total;
}
const A = addAll(2,3,4,5,6,7,8,9)
console.log(A);