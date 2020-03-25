// var name = "John" + " Doe";
// console.log(name);

var number = 4936;

lastNum = number % 10;
nextLastNum = number % 100;
nextNum = number % 1000;
firstNum = number % 10000;

console.log(lastNum);
console.log((nextLastNum - lastNum) / 10);
console.log((nextNum - nextLastNum) / 100);
console.log((firstNum - nextNum) / 1000);

