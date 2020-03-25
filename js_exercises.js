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


let rlSync = require('readline-sync');
let firstName = rlSync.question('What is your first name?\n');
let lastName = rlSync.question('What is your last name?\n');

console.log(`Well hello there, ${firstName} ${lastName}!`);

//Functions

function add(left, right){
return left + right;
}
let sum = add(3, 6);
console.log(sum);



function say(words='hello'){
console.log(words + '!');
}
say('Howdy');
say();

 Function declaration
greetPeople();

function greetPeople() {
  console.log('Good Morning');
}

//Function Expression
let greetPeople = function() {
    console.log('Good Morning');
 };
 
 greetPeople();

//Arrow function example
let greetPeople = () => console.log('Good Morning!');
greetPeople();


function getName(prompt){
//????let name = prompt(getName);
return name;
}
let firstName = getName('What is your first name?');
let lastName = getName('What is your last name?');
console.log(`${firstName} ${lastName}`);


//My effort
let numberOne = prompt('Enter the first number:');
let numberTwo = prompt('Enter the second number:');

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

console.log(`${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`);


//the answer
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);


 function times(number1, number2){
   let result = number1 * number2;
   console.log(result);
   return result;
 }
 let one = times(1,1);
 let two = times(2, one);
 let three = times(3, two);
 let four = times(4, three);
 let five = times(5,four);


function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');
*/


