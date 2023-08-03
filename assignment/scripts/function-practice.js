console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log(hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  message= "Hello, " + name +"!";
  return message
}
// Remember to call the function to test
console.log(helloName("Paul"))

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(1, 2))

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber
}
console.log(multiplyThree(2, 4, 7))

// 5. Function that will return true if a number is positive, 
  //  or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else
  return false;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(isPositive(3));
console.log(isPositive(0));
console.log(isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  lastItem = array[array.length-1]
  if (array === undefined || array.length == 0) {
    return undefined
} else 
  return lastItem
}
console.log(getLast([]))
console.log(getLast([2, 4, 5]))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  let i = array.length;
    while (i--) {
       if (array[i] === value) {
           return true;
       }
    }
    return false;
  }
console.log(find(4, [1, 3, 4]))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let i = string.length;
  while (i--) {
     if (string[i] === letter) {
         return true;
     }
  }
  return false
}
console.log(isFirstLetter('a', 'apple'));
console.log(isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  // TODO: return the sum
  return sum
}
console.log(sumAll([1, 2, 3, 4, 5]))
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let positiveArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveArray.unshift(array[i])
    }
  }
  positiveArray.sort();
  return positiveArray
}
let testArray = [-2, -1, 0, 2, 5, 6, 1] 
console.log(allPositive(testArray))
console.log(testArray)

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
// Create a function that takes a number as an argument. 
// Add up all the numbers from 1 to the number you passed to the function. 
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
	let sum = 0
	for (let i = 0; i <= num; i ++) {
		sum = (num * (num+1))/2
	}
	return sum
}
console.log(addUp(4))
console.log(addUp(23))
console.log(addUp(600))
// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}