let fruits1 = ["mango" ,"Banana","apple"];
// let fruits2 =["mango" ,"Banana","apple"]; // clone in array trick no.1
 let fruits2 =  fruits1.slice(0) .concat(["iteam1","iteam2"]); // no.2
//let fruits2 = [].concat(fruits1);
// new way
// let fruits2 = [...fruits1]; // no.3
fruits1.push("orange","dryfruits");
console.log(fruits1===fruits2);
 console.log(fruits1);
console.log(fruits2);
 let array2 =[];
let array1 = ["apple","banana","orange","graps"]
let i =0;
for(i=0; i < array1.length; i++){
    console.log (array1[i].toUpperCase());
array2.push(array1[i].toUpperCase().concat(["papya"]));
console.log(array2);
}
// *8*********************************************************************
//while loops in Array using const variavle 

const Arrays1 =["Dipak", "Rahul","Ganesh","john"];
const Arrays2=[];
 i=0;
while(i<Arrays1.length){
 Arrays2.push(Arrays1[i].toUpperCase())
i++;
}
console.log(Arrays2);


/////****************** for of loops ******************* */

const fruit =["mango","banana", "orange"];
const fruits = []
for(let n of fruit){
    fruits1.push(n.toUpperCase());
}
console.log(fruits);
    // *************** for in loops       ***********************


    const iteams =["phone","toy", "ball","etc"];
    const iteam1 = []
    for(let index in iteams){
         iteam1.push(iteams[index].toUpperCase());
    }
console.log(iteam1);

// ***********  Array Destructering     *************************************************************
const myarray = ["value1,","value2","value3","value4"];
// let myarr1 = myarray;[0]
// let myarr2 = myarray[1];
// console.log("hello word...!")

let [myvar1, myvar2, ...mynewArray] = myarray; 
// let mynewArray = myarray.slice(2);
// value1 = " change the value "
console.log(myvar1);
console.log(myvar2);
console.log(mynewArray);
