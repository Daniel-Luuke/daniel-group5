function generateRandomArray() {
  let numbers = [];

  for (let i = 0; i < 13; i++) {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNum);
  }

  return numbers;
}

// i) Function to get even numbers
function getEvenNumbers(arr) {
  let evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenNumbers.push(arr[i]);
    }
  }

  return evenNumbers;
}
// ii) Function to get odd numbers
function getOddNumbers(arr) {
  let oddNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      oddNumbers.push(arr[i]);
    }
  }

  return oddNumbers;
}

// Calling the functions and printing results
let myArray = generateRandomArray();

console.log("Random array: " + myArray);
console.log("Even numbers: " + getEvenNumbers(myArray));
console.log("Odd numbers: " + getOddNumbers(myArray));
