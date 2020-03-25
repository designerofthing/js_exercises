// LAUNCHSCHOOL JS BOOK EXERCISES

// var name = "John" + " Doe";
// console.log(name);
/*
var number = 4936;

lastNum = number % 10;
nextLastNum = number % 100;
nextNum = number % 1000;
firstNum = number % 10000;

console.log(lastNum);
console.log((nextLastNum - lastNum) / 10);
console.log((nextNum - nextLastNum) / 100);
console.log((firstNum - nextNum) / 1000);

Template literal
> `5 plus 5 equals ${5 +5}`
'5 plus 5 equals 10'
> console.log(Number('5') + 10);
15

> console.log(parseInt('5') + 10);
15

> console.log(parseInt('5', 10) + 10);
15

> `The value of 5 + 10 is ${Number('5') + 10}`
'The value of 5 + 10 is 15'
> 


names =["asta", "butterscotch", "pudding", "neptune", "darwin"];

console.log(names);

let pets = {asta: 'dog', butterscotch: 'cat', pudding: 'cat', neptune: 'fish', darwin: 'lizard'};
console.log(pets);


//Variables

let name = "Victor";

console.log(`Good morning, ${name}.`);
console.log(`Good afternoon, ${name}.`);
console.log(`Good evening, ${name}.`);


let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);


let rlSync = require('readline-sync');
let number1 = rlSync.question('Please enter the first number\n');
let number2 = rlSync.question('Please enter the second number\n');
let sum = parseInt(number1) + parseInt(number2);

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);
*/

let rlSync = require('readline-sync');
let firstName = rlSync.question('What is your first name?\n');
let lastName = rlSync.question('What is your last name?\n');

console.log(`Well hello there, ${firstName} ${lastName}!`);
