
//  Function Expression

const myfunction = function(){
    console.log("Hello word ....!");
}
myfunction();


const sumTwoNumber = function( number1,number2, number3){
    return number1+number2 + number3;
}
const ans = sumTwoNumber(20,26,60);
console.log(ans);

const isEven = function(number){
    if(number%2===0){
        return true;
    }
    return false ;
}
console.log(isEven(3))
const  findArrays = function(array, target){
    for(let i = 0; i<=array.length ; i++){
        if(array[i]===target)
            return i;
    }
    return -1;
}
const  mayArray = [23,45,54,67,45,3,4];

const ans1 = findArrays (mayArray,3) 
console.log(ans1)

const FirstCharecter = function(anyString){
    return anyString[7];
}

const newadd = FirstCharecter("Deepak Nilewar ");
console.log(newadd);