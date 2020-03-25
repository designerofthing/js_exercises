let rlSync = require('readline-sync');
let age = rlSync.question('How old are you?\n');
age = parseInt(age);
let futureAge = [10, 20, 30, 40];
console.log(`You are ${age} years old.`);
console.log(`In ${futureAge[0]} years, you will be ${futureAge[0]+age} years old.`);
console.log(`In ${futureAge[1]} years, you will be ${futureAge[1]+age} years old.`);
console.log(`In ${futureAge[2]} years, you will be ${futureAge[2]+age} years old.`);
console.log(`In ${futureAge[3]} years, you will be ${futureAge[3    ]+age} years old.`);
