 
//  Function Decleration

name();
function name()  {
    console.log("hello Diipak")
}



 function myfunc() {
console.log("hello word ..................!");
 }

 myfunc()

function twoplusThree(number1, number2, number3 ){
    return number1 + number2 + number3;
}
const returns = twoplusThree(20,37,49 );

console.log(returns);

//is even 
function isEven(number){
    if(number % 2 === 0){
        return true;    
    }
    else{
        return false;
    }
     
}
 console.log(isEven(7));
// console.log(30 %2===0);


// function 
// input : String
// output : FirstCharecter
function FirstCharecter(anyString){
    return anyString[0];
}
console.log(FirstCharecter("Deepak Nilewar"));


function findArray(array , target){
    for(let i = 0; i<= array.length; i++){
        if(array[i]===target){
return i;

        }
    }
    return -1;
}
const myArray = [20,50,40,15,10,60]
const ans = findArray(myArray,60);
console.log(ans);