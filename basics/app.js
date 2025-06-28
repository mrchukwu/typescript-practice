console.log("Hello Typesvript");
var firstname = "Kennedy";
var lastname = "Chukwu";
// console.log(firstname, " ",lastname)
// 1. STRING DATATYPE
var str1 = "This is a string using double quotes";
var str2 = 'This is a string using single quotes';
var str3 = "This is a string created using back ticks";
// 2 Numbers: numbers are always saved as floating numbers in  Tyescript
var num = 12; //return 12.0
var pi = 3.14;
// 3 Booleans
var isEligible = true;
var isEqual = false;
//0, '', null, undefined " are all falsey values"
// 5. TYPE ASSIGNMENT & TYPE INFERANCE
var addNums = function (num1, num2) {
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
var person1 = {
    name: "kennedy",
    age: 29,
    gender: "male"
};
// console.log(person1.name)
var person2 = {
    name: "kennedy",
    age: 29,
    gender: "male"
};
//  ARRAYS IN TYPESCRIPT
var person = ['john', 28, 'male', 1000];
var birthyear = [1993, 1994, 1995];
//8. TUPLES in TYPESCRIPT
var employee = [123, 'smith', 2000, true];
//9. ENUM IN TYPESCRIPT
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "ADMIN";
    Roles["READ_ONLY"] = "READ_ONLY";
    Roles["WRITE_ONLY"] = "WRITE_ONLY";
    Roles["READ_WRITE"] = "READ_WRITE";
})(Roles || (Roles = {}));
var user = {
    name: "john",
    age: 30,
    gender: 'male',
    role: Roles.ADMIN
};
if (user.role === Roles.ADMIN)
    console.log(user.role);
