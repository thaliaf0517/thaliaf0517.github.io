// user input for first name
var fname = window.prompt('What is your first name?');

// display user input
alert(`Hello ${fname}`);

// constant for pi 
const piValue = 3.1415926;

// declase and ask user for favorite number
var myFavNum = window.prompt('What is your favorite number?');

//convert text to a float
myFavNum = parseFloat(myFavNum);

//calculate area using the user's favorite number
var myArea = piValue * (myFavNum * myFavNum);

//store output in id named 'output'
document.getElementById('output').innerHTML = 
"Hello " + fname + ", you entered " + myFavNum + " as your favorite number. If that was the radius of a circle, the circle's area would be " + myArea + ".";

