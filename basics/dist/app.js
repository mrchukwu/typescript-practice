"use strict";
var _a;
console.log("Hello Typesvript");
const firstname = "Kennedy";
const lastname = "Chukwu";
// console.log(firstname, " ",lastname)
// 1. STRING DATATYPE
const str1 = "This is a string using double quotes";
const str2 = 'This is a string using single quotes';
const str3 = `This is a string created using back ticks`;
// 2 Numbers: numbers are always saved as floating numbers in  Tyescript
const num = 12; //return 12.0
const pi = 3.14;
// 3 Booleans
let isEligible = true;
let isEqual = false;
//0, '', null, undefined " are all falsey values"
// 5. TYPE ASSIGNMENT & TYPE INFERANCE
const addNums = (num1, num2) => {
    return num1 + num1;
};
//  console.log(addNums(4, 5));
//6. OBJECT TYPE IN TYPESCRIPT
//  let person: object = {
//     name: "kennedy",
//     age: 29,
//     gender: "male"
//  }
//  console.log(person.name) //error
let person1 = {
    name: "kennedy",
    age: 29,
    gender: "male"
};
// console.log(person1.name)
let person2 = {
    name: "kennedy",
    age: 29,
    gender: "male"
};
//  ARRAYS IN TYPESCRIPT
let person = ['john', 28, 'male', 1000];
let birthyear = [1993, 1994, 1995];
//8. TUPLES in TYPESCRIPT
let employee = [123, 'smith', 2000, true];
//9. ENUM IN TYPESCRIPT
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "ADMIN";
    Roles["READ_ONLY"] = "READ_ONLY";
    Roles["WRITE_ONLY"] = "WRITE_ONLY";
    Roles["READ_WRITE"] = "READ_WRITE";
})(Roles || (Roles = {}));
const user = {
    name: "john",
    age: 30,
    gender: 'male',
    role: Roles.ADMIN
};
//  if(user.role === Roles.ADMIN) console.log(user.role);
//10. ANY TYPE IN TYPESCRIPT
let dynamicData;
dynamicData = 100;
let arrAny;
arrAny = ['Hello', 100, true, null, undefined]; //can inpt any type of data
//******************************************************************************* 
//11. UNION TYPE
//******************************************************************************* 
let userUnion = null;
function getUserUnion() {
    const uname = 'Jane';
    const uage = 34;
    userUnion = { name: uname, age: uage };
    return userUnion;
}
// const resultUnion = getUserUnion();
// console.log(resultUnion)
//version 1. what if the information of status code needs to be rimmed
// function printStatusUnion(message: string, statusCode: number | string){
//     console.log(`${message}. Status code: ${statusCode}`)
// }
// veresion 2 taking cae of the trim() method on string
function printStatusUnion(message, statusCode) {
    if (statusCode === 'string')
        console.log(`${message}. Status code: ${statusCode.trim()}`);
    console.log(`${message}. Status code: ${statusCode}`);
}
//test cases
// printStatusUnion("User created successful", 201);
// printStatusUnion("User not found", "404");
//******************************************************************
//12. LITERAL TYPE
//****************************************************************** 
const str1Literal = 'some string 1'; //this has a literal
let str2Literal = "some string 2";
function roleLiteralMessage(role) {
    switch (role) {
        case 'admin':
            console.log("You have admin permission on this site.");
            break;
        case 'read-write':
            console.log("You have read/write permission on this site");
            break;
        case 'read':
            console.log("You have read permission on this site");
            break;
        default:
            console.log("Unknow user permission");
    }
}
function printMessageStatusAlias(message, status) {
    if (typeof status === "string") {
        // console.log(`${message}. Status code: ${status.trim()}`)
    }
    // console.log(`${message}. Satus code: ${status}`);
}
function getFullNameAlias(user) {
    return user.firstname + " " + user.lastname;
}
function isEligibleToVotealias(user) {
    return user.age >= 18;
}
let userAlias = {
    firstname: "jane",
    lastname: "Doe",
    age: 36
};
//example 1
function statusMessage(message, status) {
    return message + " " + status;
}
//test case
// console.log(statusMessage("User fetched successfully.", 200));
//example 2
function addNumbers(num1, num2) {
    return num1 + num2;
}
//test case
// console.log(addNumbers(4,5));
function addNumbers2(a, b) {
    // console.log(addNumbers2(10, 20)) //function not returning anything...therefore void 
}
function greetUser(user) {
    const greetmsg = 'Hello, ' + user.name;
    console.log(greetmsg);
}
function sum(num1, num2) {
    return num1 + num2;
}
function isEligibleFunc(user) {
    console.log(user.age >= 18);
}
let greet;
// greet = greetUser;
// greet = isEligibleFunc;
let calculateSum;
calculateSum = sum;
// console.log(calculateSum(3,4));
let userFunc = { name: "john", age: 28 };
// greet(userFunc);
// greet(userFunc);
//*************************************************
//16. FUCTION TYPE FOR CALLBACK
//*************************************************
let addNumbersFunc;
function sumFunc(num1, num2) {
    // return num1 + num2;
}
function addFunc(num1, num2) {
    // console.log(num1 + num2);
}
//example 2
function getResult(num1, num2, print) {
    const result = num1 + num2;
    // print("Sum = ", result);
}
function display(msg, result) {
    // console.log(msg + result);
}
// getResult(12, 13, display);
//*************************************************************
//17. Unknown Type in Typescrippt
//*************************************************************
let strType;
let uname = "Some string";
strType = "123";
uname = "Hello uname";
if (strType === 'string') {
    uname = strType;
}
let greetUserVoid = (user) => {
    // console.log("Hello " + user)
};
greetUserVoid("kennedy");
let createErrorMsgNever = (message, errorCode) => {
    throw { message: message, code: errorCode };
};
// createErrorMsgNever("Error picked from code", 404);
//*******************************************************
//*Array Destructuring
//*******************************************************
const personArr = ["John", "smith", 28, "male"];
// const [fname, lname, age, gender] = personArr;
// console.log(fname, lname, gender);
// **************************************************
// Object Destructuring
// **************************************************
const userObj = {
    fname: "John",
    lname: "Smith",
    age: 29,
    gender: "male",
    city: "Port Harourt"
};
const { fname: f, lname, age, gender, city } = userObj;
// console.log(f)
// ************************************
// Spread Operator
// ************************************
const userArrSpreadOperator = ["John", "Mark", "Mary"];
// console.log(userArrSpreadOperator);
// console.log(...userArrSpreadOperator);
const copyArr = [...userArrSpreadOperator];
// console.log(copyArr)
const extendedUserArrSpreadOperator = ["Ray", "Jane", ...userArrSpreadOperator];
// console.log(extendedUserArrSpreadOperator);
//Object spread operator
const userObjtSp = {
    fname: "John",
    lname: "smith",
    age: 28,
};
const employeeObjSpreadOperator = Object.assign({ salary: 20000, company: "Google" }, userObj);
// console.log(employeeObjSpreadOperator)
// ****************************************************
// Rest parttern and Rest Operator
// ****************************************************
const [a, b, c, ...rest] = [1, 2, 4, 5, 6, 7, 8, 9];
// console.log(rest);
const arrSpread = [10, 11, 12, ...rest];
// console.log(arrSpread);
function addNumbersArr(...numbers) {
    let count = 0;
    for (let i of numbers) {
        count += i;
    }
    return count;
}
//test cases
// console.log(addNumbersArr(1,2,3,4));
// console.log(addNumbersArr(1,2,3,4,5,6,7));
// ************************************
// Nullish Coalescing Operator
//*************************************
const value = "";
// let storage = value || "DEFAULT"; // it returns "DEFAULT", because || operator sees empty string as null value
let storage = value !== null && value !== void 0 ? value : "DEFAULT"; //this will return "DEFSUALT" if value is null or undefined. But an empty string will be returned.
// console.log(storage);
// *****************************
// Optional Chaining
//******************************
const products = [
    { name: 'iPhone', price: 1200, details: { color: 'black', ram: 8 } },
    { name: 'T-Shirt', price: 120, details: { color: 'red', size: 32 } },
    { name: 'TS Book', price: 50, pages: 120, author: 'Sam' }
];
for (let prod of products) {
    console.log("******************************\n\n");
    console.log("Product name: " + prod.name);
    console.log("Product name: " + prod.price);
    console.log("Product name: " + ((_a = prod.details) === null || _a === void 0 ? void 0 : _a.color));
}
