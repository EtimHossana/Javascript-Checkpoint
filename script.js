/* Some functions with Javascript
 Strings Manipulation Functions */

function reversalstr() { 
    let str = "Hello World"
    let reverseString = str.split("").reverse().join("");
   
    console.log(reverseString);
    }

reversalstr();

// CHARACTER COUNT FUNCTION
function countCharacters(str) {
  return str.length;
}

let string = "Hello world";
console.log(countCharacters(string));

//  CAPITALIZE LETTERS FUNCTION
function capitalizeFirstLetters(sentence) {
  return sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

let sentence = "i am a nice guy, but I take coffee sometimes to stay awake";
console.log(capitalizeFirstLetters(sentence));


// ARRAY FUNCTIONS
let numbers = [12, 45, 7, 23, 56, 89, 34];
 function findMax(arr) {
   return Math.max(...arr);
 }

 function findMin(arr) {
   return Math.min(...arr);
 }
console.log(findMax(numbers));
console.log(findMin(numbers));

// SUM OF NUMBERS IN ARRAY
let numbersr = [12, 45, 7, 23, 56, 89, 34];
//  Calculate sum
const sumOfNumbers = numbersArray => {
  let total = 0;
  for (
    let i = 0;
    i < numbersArray.length;
    i += 1
  ) {
    total += numbersArray[i];
  }
  return total;
};
console.log(sumOfNumbers(numbers));


// FILTER AN ARRAY
function filterArray(arr, condition) {
    return arr.filter(condition);
}
// Example usage:
let numberrrs = [1, 2, 3, 4, 5, 6];
let evenNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(evenNumbers);

// MATHMATICAL FUNCTIONS

function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));  // Output: 120



function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// Example usage:
console.log(isPrime(11));  // Output: true
console.log(isPrime(15));  // Output: false


function fibonacci(n) {
  let memo = [0, 1];
  function fib(i) {
    if (i < memo.length) return memo[i];
    let result = fib(i - 1) + fib(i - 2);
    memo.push(result);
    return result;
  }

  let sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(fib(i));
  }
  return sequence;
}

console.log(fibonacci);


// var visitorName = prompt("what is your name");
// console.log(visitorName);

// var isCoolWithIt = confirm("Are you ok with it?");

/*var person1 = {
    name: "foulan",
    age: 9000,
    isStudent: true
} */

// HOW TO DECLARE AN OBJECT
    
// var firstStudent = {
//     name: "Jonah",
//     age: 28,
//     married: true

// };

// INCREAMENTING AND DECREAMENTING OPERATORS
/*var num = 0;
console.log(num);
num++;
console.log(num);
num--;
console.log(num); */


// // INCREAMENTING AND DECREAMENTING OPERATORS
// var num = 0;
// console.log(num);
// num++;
// console.log(num);
// num++;
// console.log(num);

// var boy = 30;
// boy++;
// console.log(boy);