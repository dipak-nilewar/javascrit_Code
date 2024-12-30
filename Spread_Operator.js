const   array1 = [1,2,3,4,5];
const   array2 = [6,7,8,9,0];
const newArray = [...array1, ...array2,..."123456789"];
console.log(newArray);

// spread Object

const obj1 = { iteam: "pen",phone :"vivo",
    wood: "ball"}
    const obj2 = {
        key1: "value1",
        key2: "value2"
    }
    const newobj = {...obj1, ...obj2}
    console.log(newobj);





//     let name = "Dipak"
//     let srt = ""
//     let myname = "My Name is Dipak Nilewar"
// console.log(name);
//     for(let i=-1; i>= name.length-1; i++){
//         str +=name[i];
//     }
//     console.log(name);
    
 

// console.log()


// console.log(name); 