console.log("****************** Array Destructuring *******************")
let Arrays=["Advith","pawan","sai","om"];
let = [myvar1, myvar2, ...mynewArray] = Arrays;
 // let Array =  person.slice(2); //without using method Destructuring **********
console.log(myvar1);
console.log(myvar2);
console.log(mynewArray);


console.log("****************** Object Destructuring *******************")

const person ={
    name:"Dipak", 
    age : 24,
    id : 1011  ,
    Hobbies : "BGMI",
    salary : 0.1   
};
const M1 = person.name;
const M2 = person.age;
const M3 = person.id;

const {name, age, id, ...mynewOject} = person
console.log( name, age  , id, mynewOject)

console.log("*************************** Object Inside Using Array Destructuring ****************************")
 
const user =[{
userName1: "Dipak",
userId : 2020,
age  :   20,
userHobbies : "Writting"
},
{userName2: "John",
    userId : 3030,
    age  :   23,
    userHobbies : "Runig"
},
{
    userName3: "Ajit",
    userId : 4040,
    age  :   22,
    userHobbies : "Jumping"
}] 

for(let person of user ){
    console.log(person.userId);
} 

console.log("************************ nesded Object Destructuring******************")
const User2 =[{
    userName: "Sai",
    userId : 4646,
    age  :   34,
    userHobbies : "Writting"
    },

    {
        userName: "John",
        userId : 3030,
        age  :   23,
        userHobbies : "Runig"
    },

    {
        userName: "Ajit",
        userId : 4040,
        age  :   22,
        userHobbies : "Jumping"
    }] 

    // const[ userDitails1, userDitail2 , userDitails3] = User2;
    const[{userName}, {userId}] = User2;
    console.log(userName,userId);