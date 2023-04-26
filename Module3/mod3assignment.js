// part 1 code - for loop that runs 10 times and checks to see if the 
// value of the loop control variable is even or odd

// variable to hold output text
var text = "";

// loop that builds output and checks value

for(var i = 0; i <= 10; i++){
    //use if else to check if i is even or odd
    if(i % 2 == 0)
    text += "Count " + i + " is even <br>";
    else
    text += "Count " + i + " is odd <br>";
}

// add text string by using .getelementbyid
document.getElementById("forloop").innerHTML = text;

// function to process the input
function forloopDemo(){
    // reset text variable
    var text = "";

    // get value from input tag
    var num = document.getElementById("input").value;

    // use a decision to check if the value is not a number
     // check if value is less than 5
     // check if value is greater than 20
    if(!Number.isInteger(parseInt(num)))
    document.getElementById("forloop2").innerHTML = "<b>ERROR: </b>Invalid input";
else if(parseInt(num) < 5)
document.getElementById("forloop2").innerHTML = "<b>ERROR: </b>Value is less than 5";
else if(parseInt(num) > 20)
document.getElementById("forloop2").innerHTML = "<b>ERROR: </b>Value is greater than 20";
else{
    // if data is valid
    // convert number to int
    num = parseInt(num);

    //rebuild text using for loop
    for(var i = 1; i <= num; i++){
        text += "This is iteration #" + i + "<br>";

    }

    // add text string to id named forloop2

    document.getElementById("forloop2").innerHTML = text;
}
   
}

// function processes an array of courses to be displayed to the html page
function forEachDemo(){
    //array of classes
    let arr = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

var text = "";

//use the .forEach() method to process output
arr.forEach((item, index) => {
    if(index == arr.length - 1)
    text += item;
    else
    text += item + ", ";
});

// add output to the id named forEachDisplay
document.getElementById("forEachDisplay").innerHTML = text;
}