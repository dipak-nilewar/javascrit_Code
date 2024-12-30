// let gender =20;
// if(gender<=18){
//     console.log("user can play ddlc");

// }else{
// console.log("user can  play mario");
// }

// let num =21
// if(num%2===0){
//     console.log("even Number");
// }else{
//     console.log("thats number are odd")
// }
// // **********************
// let age =2;
// let drink;

// if(age>=18){
//     drink="milk";
// }else{
//     drink="coffee";
// }
// console.log(drink);


// // Ternary operator  *****************************************

// let age= 18;
// let drink = age<=17 ? "coffee": "milk";
// console.log(drink) 


// and &&  operator

// let age =18;
// let myfirstname = "Dipak"

// if(myfirstname[0] === "h" && age>=18){
// console.log("Name start with D and age above 18");
// }else{
//     console.log("inside the if")
// }

// let age = 20;
// let myfirstname="Deepak"

// if(myfirstname[5] ==="e" || age>=24){

// console.log("my name end of  k name and my age is 24 ");
// }else{
//     console.log("inside the else ");

// }

// // nessded if_else **********************************

// let WiningNumber = 20;
// let GuessNumer = + prompt("guess a Number")
// if(GuessNumer===WiningNumber){
//     console.log("your Guess number is right")
// }else{
//     if(GuessNumer < WiningNumber){
//         console.log("you are Guess too low number.. !!!")
//     }else{
//         console.log("your Guess too High Number.. !!!")
//     }
// }
// //**************  nessted if else ********************************************************* */
    
// let Tempreture = 0;
// if(Tempreture<0){
//     console.log("extremely could outside ");

// }else if(Tempreture<10){
//     console.log("It is could outside");

// }else if(Tempreture<28){
//     console.log("wheather is oky ");

// }else if(Tempreture< 35){
//     console.log("Let's go  for Swiming");

// }else if(Tempreture<45){
//     console.log("turn of AC");

// }else{
//     console.log("too hot ..!!")
// }
// console.log("Hello Script")


// Switch Statment****************************************************
let day = 6;
switch(day) {
    case 0:
    console.log("Monday");
    break;
    case 1: 
    console.log("Tuesday");
    break;
    case 2:
    console.log("Wednesday");
     break;
    case 3:
    console.log("Thursday");
    break;
    case 4: 
    console.log("Friday");
    break;
    case 5: 
    console.log("Saturday")
    break;
    case "Sunday":
    console.log("Sunday")
    break;
    default:
     console.log("invali Day");
}