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
