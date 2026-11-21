/*
1. Convert the string "123" to a number and add 7. (0.5 Grade) • Output Example: 130 
*/
// console.log(Number("123")+7);

//////////////////////////////////////////////////////////////////

/*
2.Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
•
Input Example: 0
•
Output Example: "Invalid"
*/

// let value = [];
// if (value !== true) console.log("Invalie");

//////////////////////////////////////////////////////////////////

/*
3.
Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
•
Output Example:1, 3, 5, 7, 9
*/

// for (let i = 0; i<=10 ; i++) {

//     if(i % 2 === 0) {

//         continue;
        
//     } 

//     console.log(i);

// }

//////////////////////////////////////////////////////////////////

/* 
4.
Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
•
Input Example: [1, 2, 3, 4, 5]
•
Output Example: [2,4]

*/

// let arr = [1,2,3,4,5];
// let filteredArr = arr.filter(e => e % 2 === 0);
// console.log(filteredArr);

//////////////////////////////////////////////////////////////////


/* 
5.Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
•
Input Example: [1, 2, 3], [4, 5, 6]
•
Output Example: [1, 2, 3, 4, 5, 6]
*/

// let arrOne = [1,2,3];
// let arrTwo = [4,5,6];
// let spreadedArr = [...arrOne, ...arrTwo];
// console.log(spreadedArr);

//////////////////////////////////////////////////////////////////

/* 
6.
Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade)
•
Input Example: 2
•
Output Example: “Monday”

*/

// let day = 3;

// switch(day) {
//     case 1:
//         console.log("Satureday");
//         break;
        
//     case 2:
//         console.log("Sunday");
//         break;
        
//     case 3:
//         console.log("Monday");
//         break;
        
//     case 4:
//         console.log("Tuseday");
//         break;
        
//     case 5:
//         console.log("Wednsday");
//         break;
        
//     case 6:
//         console.log("Thurseday");
//         break;
        
//     case 7:
//         console.log("Friday");
//         break;
        
// }

//////////////////////////////////////////////////////////////////

/* 

7.Create an array of strings and return their lengths using map method (0.5 Grade)
•
Input: ["a", "ab", "abc"]
•
Output Example: [1, 2, 3]

*/

// let firstArr = ["a", "ab", "abc"];
// let finalArr = firstArr.map(e => e.length);
// console.log(finalArr);

//////////////////////////////////////////////////////////////////

/* 
8.
Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
•
Input Example: 15
•
Output Example: “Divisible by both”
*/

// function divisbleNumber(x) {

//     if(x % 3 === 0 && x % 5 === 0) return "Dvisible by both";

// }

// console.log(divisbleNumber(15));

//////////////////////////////////////////////////////////////////

/* 
9.Write a function using arrow syntax to return the square of a number (0.5 Grade)
•
Input Example: 5
•
Output Example: 25

*/

// squeredNumber = (e) => {
//     return Math.pow(e, 2);
// }
// console.log(squeredNumber(5));

//////////////////////////////////////////////////////////////////

/* 
10.
Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
•
Input Example: const person = {name: 'John', age: 25}
•
Output Example: 'John is 25 years old'
*/

// const person = {name: 'John', age: 25};

// function dsitructedPersoneData(x) {
//     return `${x.name} is ${x.age} years old`;
// }

// console.log(dsitructedPersoneData(person))

//////////////////////////////////////////////////////////////////

/**
 * 11.
Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
•
Input Example: 1, 2, 3, 4, 5
•
Output Example: 15
 */

// function distructedFunction(...nums) {
//     return (
//         nums.map(e => e)
//     )
// }

// console.log(distructedFunction(1,2,3,4,5,6));

//////////////////////////////////////////////////////////////////

/**
 * 12.
Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
•
Output Example: “Success”
 */



// const fetchedPromise = new Promise(() => {
//     setTimeout(()=>{
//         const resolved = false;
        
//         if(resolved) console.log("Success")

//         else console.log("faild");

//     },3000)

// })

//////////////////////////////////////////////////////////////////

/* 
13.
Write a function to find the largest number in an array. (0.5 Grade)
•
Input Example: [1, 3, 7, 2, 4]
•
Output Example: 7

*/

// const arrOfNumber = [1, 3, 7, 2, 4];

// let theLargest = 0;

// for (let i = 0; i <= arrOfNumber.length; i++) {

//     if(arrOfNumber[i] > theLargest) theLargest = arrOfNumber[i];
    
// }
// console.log(theLargest);

//////////////////////////////////////////////////////////////////

/* 
14.
Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
•
Input Example: name: "John", age: 30}
•
Output Example: ["name", "age"]

*/

// const obj = {name: "John", age: 30};

// function objKeys (x) {

//     let newArr = [];

//     newArr.push(x.key);

//     return Object.keys(x);

// }
// console.log(objKeys(obj))

//////////////////////////////////////////////////////

/* 
15.
Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
•
Input: "The quick brown fox"
•
Output: ["The", "quick", "brown", "fox"]

*/

// const str = "The quick brown fox";

// console.log(str.split(" "));

//////////////////////////////////////////////////////

/* B. Part 2: Essay Questions (2.5 Grade): 1

What is the difference between forEach and for...of?

forEach looping on array and didn't return any value it is printing the values can't use continue and break on it 

for of it is a loop can retunr a value and also i can use a continue and break on it 

*/

/* 2
What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)

hoisting is: funcitons , variables , class declaration moving up to the very top of scode before it's execution and then starting to go line by line till find the specific variables , function and class it is used for var

example {

console.log(x);
var x = 5;

and hositing treating like 

var x; 
console.log(x); => undefine
var x = 0;
}

Temporal Dead Zone is : like a hoisting but it for let , const and declaring the variables , classes , function before it's scope not to the very top og page

example : {

function num() {
    console.log(x); => Error can't declare x before it's intializations 
    let x = 5;
}
}

*/

/** 3
 * 
 * What are the main differences between == and ===? (0.5 Grade)
 *  == comparing the value only 
 * 
 * === comparing the value and it's type
 * 
 */

/** 4.
 * Explain how try-catch works and why it is important in async operations.
 * 
 * it is handling the error and the success process in js 
 * 
 * using the async to use an api and use await to stop the sort of scope of code to be excuted till it be finished and return the value 
 * 
 */

/* 5. 
* What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)

coercion : forced the data type to be changed for not making an error
EX: console.log(5 + "5") 5 forced to be as string and the result will be 55

conversion : the programer who is changing the type to the sutalbe type he needs
EX: {
    const x = "123";
    Number(x);

}
*/
