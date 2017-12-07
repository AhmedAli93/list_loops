 'use strict';


var name = prompt('What is your name?');
console.log(name);

alert('Hi there ' + name + ', I\'m going to ask you yes/no questions.');

var work = prompt('Do you work for a living');
var workUpper = work.toUpperCase();
console.log(work);

if(workUpper ==='NO'|| workUpper ==='N')
{
var school = prompt('Are you going to school');
var schoolUpper = school.toUpperCase();
console.log(school);}

if(schoolUpper === 'NO' || schoolUpper === 'N'){
  alert('You are very lazy');
}

if(workUpper === 'YES' || workUpper === 'Y'){
var coding = prompt('Have you learned how to write code?');
var codingUpper = coding.toUpperCase();
console.log(coding);}

if(codingUpper === 'YES' || codingUpper ==='Y'){
  alert('Wow! I have also learned how too code also.');
}

var number;
var counter = 0;

while (counter !== 5) {
  number = parseInt(prompt('What do you think my age is?'));

  if (number < 24) {
    alert('I\'m not that young!');
    counter++;
  } else if (number > 24) {
    alert('I\'m not that old!');
    counter++;
  } else if (number === NaN || number === null) {
    alert('please enter a number');
    counter++;
  } else if (number === 24){
    alert('You have answerd correct');
    counter++;
    break;
  }
}

var visited = ['Canada', ' Kenya', ' Mexico', ' England'];
var answer = prompt('What countries have I visited?');
var count = 0;
var flag;

for (var i = 0; i < visited.length; i++) {
  console.log('each iteration:', visited[i]);
  count++;
  console.log(count);
  if (answer === visited[i]) {
    alert('nice job!  you got it right!');
    flag = true;
    break;
  }

}

if (!flag) {
  alert('nope you are wrong these are the countries I have visited '+visited);
}
