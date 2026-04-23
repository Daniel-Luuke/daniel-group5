let ages = [18, 18, 18, 19];

let total = 0;
for (let i = 0; i < ages.length; i++) {
  total += ages[i];
}
console.log("Total age: " + total);

let average = total / ages.length;
console.log("Average age: " + average);
