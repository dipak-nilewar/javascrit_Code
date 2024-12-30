const key ="email";
const person = {
    name : "Dipak",age : 24,
     Hobbies : ["listening","reading", "watching","Guitar"],
    
    // Access to space in two key object
 //  example
  "person Hobbies" :["Swiming ","listening","writting"] 
}

// add second variable key (email)
// person.key= "dipaknilewar" output = key : dipaknilewar
// person["key"]="dipaknilewar"; // output = key : dpaknilewar
person[key]= "dipaknilewar";//output = dipaknilewar  

console.log(person);
// console.log(person.Hobbies);
// add key
// console.log(person["person Hobbies"]);
person.Gender="male";
// console.log(person);

// Differce Between dot and braket Nation

console.log(person["person Hobbies"]);
// *******************************************************************
// How to iterate object
// for(let key in person){    //for in loops
//     console.log(key, " :", person[key]);
// }
// console.log(Object.keys(person));
const val = Array.isArray((Object.keys(person)));
// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }