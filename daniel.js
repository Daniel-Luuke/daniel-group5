let randomNum = Math.floor(Math.random() * 50) + 1;
switch (true) {
  case randomNum % 3 === 0:
    console.log("fizz");
    break;
  case randomNum % 5 === 0:
    console.log("buzz");
    break;
  case randomNum % 3 === 0 && randomNum % 5 ===0:
    console.log("fizzbuzz");
    break;
  default:
    console.log(randomNum);
}