function app(){

    const func =()=>{
        console.log("inside the func")
    }

    const addtwonumber = (number , number1)=> {
        return number + number1;
    }

    const mul = (num1 , num2) =>{
        return num1 * num2;
// console.log(30,20);
    }

    console.log("inside app")
    func();
    console.log(addtwonumber(20,90));
    console.log(mul(30,30));
 }

 app();