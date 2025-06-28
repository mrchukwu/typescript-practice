
console.log("Hello Typesvript");

const firstname: String = "Kennedy";
const lastname: String = "Chukwu";

console.log(firstname, " ",lastname)

// 1. STRING DATATYPE

const str1 = "This is a string using double quotes";
const str2 = 'This is a string using single quotes';
const str3 = `This is a string created using back ticks`;

// 2 Numbers: numbers are always saved as floating numbers in  Tyescript
Let num = 12; //return 12.0
const pi = 3.14;

// 3 Booleans
let isEligible = true;
let isEqual = false;

//0, '', null, undefined " are all falsey values"


// 5. TYPE ASSIGNMENT & TYPE INFERANCE
 const addNums = (num1: number, num2: number) => {
    return num1 + num1
 }
 console.log(addNums(4, 5));

 //6. OBJECT TYPE IN TYPESCRIPT
//  let person: object = {
//     name: "kennedy",
//     age: 29,
//     gender: "male"
//  }

//  console.log(person.name) //error

 let person1: {} = {
    name : "kennedy",
    age: 29,
    gender: "male"
 }
// console.log(person1.name)

 let person2: {name: string, age: number, gender: string} = {
    name : "kennedy",
    age: 29,
    gender: "male"
 }

//  ARRAYS IN TYPESCRIPT
 let person: (string | number)[] = ['john', 28, 'male', 1000]
 let birthyear: number[] = [1993,  1994, 1995]

 //8. TUPLES in TYPESCRIPT
 let employee : [number, string, number, boolean] =  [123, 'smith', 2000, true]

 //9. ENUM IN TYPESCRIPT
 