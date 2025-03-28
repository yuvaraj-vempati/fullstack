//1.
const person = {
    name: "John Doe",
    age: 30,
    address: {
        city: "New York",
         country: undefined
    },
    hobbies: ["Reading", "Traveling"]
    };
    let {name:fullname,age,address:{city,country="USA"}}=person
    console.log(fullname,age,city,country,fullname)
    let {hobbies:[firsthobby]}=person;
    console.log(firsthobby)



//2.
const fruits = ["apple","banana","mango","orange","pineapple"]

let [first,second,...a]=fruits;

[first,second]=[second,first]

console.log(first,second,a);

//3.
function sum(...sum){
    return sum.reduce((s,n)=>s+n)

}
console.log(sum(1,2,3,4))
console.log(sum(10,20,30))

//4.
const user = { name: "Alice", age: 25 };
const job = { title: "Developer", company: "TechCorp" };
const userProfile={...user,...job,experience: "2 years"}
console.log(userProfile)
//5.  
const  numbers = [1,2,3,4,5];
const num = [...numbers];
num[0]=10;
console.log(numbers)
console.log(num)

const numbers1 = [1, 2, 3, 4, 5];
const newNumbers = [0, ...numbers, 6];
console.log(newNumbers);