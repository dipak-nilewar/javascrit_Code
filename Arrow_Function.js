//  Arrow Function  =>
    const singHappy = ()=>{
console.log("hello guys")
    }
    singHappy();

    const isOdd = (number)=>{
if(number%2===0){
    return true
}
return false
    }
    const ans = isOdd(7)
    console.log(ans);

    const sumTwonumber = (num1 , num2) =>{
        return num1 + num2 ;
    }
    // console.log(sumTwonumber(3,897))
    const anser = sumTwonumber(43,54);
    console.log(anser)
    
    const findingArray = (array, target) =>{
        for(let i = 0; i<= array.length; i++){
            if(array[i]===target){
                return i;
            }
        }
        return -1
    }
    // const arr = [10,20,40,50,30,54,57,29];
    // console.log(findingArray(arr,57))/

    const arr = [10,20,40,50,30,54,57,29]; //adding new variable in conts (arr)
     const add = findingArray(arr, 54)
     console.log(add);



name();

     function name(){
        console.log("Hello Dipak")
     }