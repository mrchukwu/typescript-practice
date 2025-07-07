
console.log("Hello Typesvript");

const firstname: String = "Kennedy";
const lastname: String = "Chukwu";

// console.log(firstname, " ",lastname)

// 1. STRING DATATYPE

const str1 = "This is a string using double quotes";
const str2 = 'This is a string using single quotes';
const str3 = `This is a string created using back ticks`;

// 2 Numbers: numbers are always saved as floating numbers in  Tyescript
const  num = 12; //return 12.0
const pi = 3.14;

// 3 Booleans
let isEligible = true;
let isEqual = false;

//0, '', null, undefined " are all falsey values"


// 5. TYPE ASSIGNMENT & TYPE INFERANCE
 const addNums = (num1: number, num2: number) => {
    return num1 + num1
 }
//  console.log(addNums(4, 5));

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
 enum Roles {
    ADMIN = "ADMIN", READ_ONLY = "READ_ONLY", WRITE_ONLY = "WRITE_ONLY", READ_WRITE = "READ_WRITE"
 }

 const user = {
    name: "john",
    age: 30,
    gender: 'male',
    role: Roles.ADMIN
 }

//  if(user.role === Roles.ADMIN) console.log(user.role);

//10. ANY TYPE IN TYPESCRIPT
let dynamicData: any;
dynamicData = 100;
let arrAny: any[];
arrAny = ['Hello', 100, true, null, undefined]; //can inpt any type of data

//******************************************************************************* 
//11. UNION TYPE
//******************************************************************************* 
let userUnion : {name: string, age: number} | null = null;

function getUserUnion(){
    const uname = 'Jane';
    const uage = 34;
    userUnion = {name: uname, age: uage};
    return userUnion;
}
// const resultUnion = getUserUnion();
// console.log(resultUnion)

//version 1. what if the information of status code needs to be rimmed
// function printStatusUnion(message: string, statusCode: number | string){
//     console.log(`${message}. Status code: ${statusCode}`)
// }

// veresion 2 taking cae of the trim() method on string
function printStatusUnion(message: string, statusCode: string | number){
    if(statusCode === 'string')
        console.log(`${message}. Status code: ${statusCode.trim()}`)
    console.log(`${message}. Status code: ${statusCode}`)
}

//test cases
// printStatusUnion("User created successful", 201);
// printStatusUnion("User not found", "404");

//******************************************************************
//12. LITERAL TYPE
//****************************************************************** 
const str1Literal = 'some string 1'; //this has a literal
let str2Literal = "some string 2";

function roleLiteralMessage(role: 'admin' | 'read-write' | 'read'){
    switch(role){
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

// roleLiteralMessage('admin')

//*************************************************************************
//13. Understanding Type Alias : providing a custome name for your type
//*************************************************************************
type stringAlias = string;
type stringOrNumber = string | number; //Type Alias : custome type 

function printMessageStatusAlias(message: string, status: stringOrNumber){
    if(typeof status === "string"){
        // console.log(`${message}. Status code: ${status.trim()}`)
    }
    // console.log(`${message}. Satus code: ${status}`);
}

//test cases
// printMessageStatusAlias("User request returned", "200");
// printMessageStatusAlias("User not found", 404);

//example 2 of Type Alias
type User = {
    firstname: string,
    lastname: string, 
    age: number
}
function getFullNameAlias(user: User){
    return user.firstname + " " + user.lastname;
}

function isEligibleToVotealias(user:User){
    return user.age >= 18;
}

let userAlias: User = {
    firstname: "jane",
    lastname: "Doe",
    age: 36
}

// console.log(getFullNameAlias(userAlias))
// console.log(isEligibleToVotealias(userAlias))

//*************************************
//14. FUNCTION RETURN TYPE : 
// determine the type of value returned in a function
//*************************************

type stringOrNumberReturned = string | number;

//example 1
function statusMessage(message: string, status: stringOrNumberReturned): stringOrNumberReturned{
    return message + " " + status;
}

//test case
// console.log(statusMessage("User fetched successfully.", 200));

//example 2
function addNumbers(num1: number, num2: number): number {
    // return num1 + num2;
}

//test case
// console.log(addNumbers(4,5));

function addNumbers2(a: number, b: number): void{
    // console.log(addNumbers2(10, 20)) //function not returning anything...therefore void 
}

//*******************************************
//Funtion as Type
//*******************************************
type UserFunc = {name: string, age: number};

function greetUser(user: UserFunc){
    const greetmsg = 'Hello, ' + user.name;
    console.log(greetmsg);
}

function sum(num1: number, num2: number){
    return num1 + num2;
}

function isEligibleFunc(user: UserFunc) {
    console.log(user.age >= 18)
}

let greet : (usr: UserFunc) => void;
// greet = greetUser;
// greet = isEligibleFunc;

let calculateSum : (num1: number, num2: number) => number;
calculateSum = sum;
// console.log(calculateSum(3,4));

let userFunc = {name: "john", age: 28}
// greet(userFunc);
// greet(userFunc);

//*************************************************
//16. FUCTION TYPE FOR CALLBACK
//*************************************************
let addNumbersFunc: (n1: number, n2: number) => number;

function sumFunc(num1: number, num2: number) {
    return num1 + num2;
}

function addFunc(num1: number, num2: number){
    // console.log(num1 + num2);
}

//example 2
function getResult(num1: number, num2: number, print: (str: string, value: number) => void){
    const result = num1 + num2;
    print("Sum = ", result);
}

function display(msg: string, result: number){
    // console.log(msg + result);
}

// getResult(12, 13, display);


//*************************************************************
//17. Unknown Type in Typescrippt
//*************************************************************
let strType : unknown;
let uname : string = "Some string";

strType = "123";
uname = "Hello uname";

if(strType === 'string'){
    uname = strType
}

// console.log(strType);
// console.log(typeof uname)

//*******************************************************
//18. NEVER Type in Typescript
//*******************************************************
type dataType = string | number; 
let greetUserVoid = (user: string): void => {
    console.log("Hello " + user)
}
greetUserVoid("kennedy");

let createErrorMsgNever = (message: string, errorCode:dataType ): never => {
    throw {message: message, code: errorCode};
}
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
}

const {fname: f, lname, age, gender, city} = userObj;
console.log(f)