/*
    Snoopy info
    Name: Snoopy
    Breed:	Beagle	
    Show: Peanuts
    OtherNotes:	Peanuts and other prime-time animated TV specials based upon the comic strip Peanuts.
*/

// Part 1 - Create an Object Literal - JSON
var myDog = {
    "name": "Snoopy",
    "breed": "beagle",
    "tvShow": "Peanuts",
    "note": "Peanuts and other prime-time animated TV specials based upon the comic strip Peanuts.",
    "mySound": "I am not scary",
    "canTalk": false,
    "myGreeting": function(){

        var talkString = "";

        if(this.canTalk == true)
            talkString = "I can talk.";
        else
            talkString = "I cannot talk.";

        return `<p>Hello, my name is ${this.name}, when I bark ${this.mySound}. <br>
        I starred in the TV Show ${this.tvShow}. <br>
        My character is a ${this.breed}. In the show, I am ${this.note}<br>
        ${talkString}</p>`
    }
};

// add the output of myGreeting from the object literal to the output1 id in the HTML
document.getElementById("output1").innerHTML = myDog.myGreeting();

// Part 2 - create an instance of a dog object using a constructor
// first, make a class definition for a dog

class dog{
    // define the constructor
    constructor(name = "",
    breed = "", tvShow = "", mySound = "", note = "", canTalk = false)
    {
        this.name = name;
        this.breed = breed;
        this.tvShow = tvShow;
        this.mySound = mySound;
        this.note = note;
        this.canTalk = canTalk;
    }
    
    // define the myGreeting() function
    myGreeting()
    {
        // tell whether or not the dog can talk based on the value of the canTalk
        // property
        var talkString = "";

        if(this.canTalk == true)
            talkString = "I can talk.";
        else
            talkString = "I cannot talk.";

        // return the paragraph text
        return `<p>Hello, my name is ${this.name}, when I bark ${this.mySound}. <br>
            I starred in the TV Show ${this.tvShow}. <br>
            My character is a ${this.breed}. In the show, I am ${this.note} <br>
            ${talkString}</p>`
    }
}

// create an instance with no values passed
// let myDog1 = new dog(); // this instance initializes the values with defaults

// console.log()
// console.log(myDog1.canTalk); // displays a value of false - default property

// create an instance of the dog class with arguments passed to the constructor
let snoopy = new dog("Snoopy", "beagle", "Peanuts", "I am not scary", "Charlie Brown's pet who appears in movies and other prime-time animated TV specials based upon the comic strip Peanuts", false);

// add the output of myGreeting() to the output2 id in the HTML page
document.getElementById("output2").innerHTML = snoopy.myGreeting();

// make two new instances of the dog class with arguments passed to the constructors
let scooby = new dog("Scooby-Doo", "Great Dane", "Scooby-Doo, Where are you", "I am not scary", "a lifelong companion of Shaggy Rogers; about a big dog and several teenage humans", true);

let scrappy = new dog("Scrappy-Doo", "Great Dane", "Scooby-Doo, Where are you", "I am not scary", "the nephew of cartoon star Scooby-Doo; about a big dog and several teenage humans", true);

//use a for-in loop in order to get the information about a dog object
/*
for(var item in scooby)
  console.log(`${item}: ${scooby[item]}`)
console.log("--------------------------------");
*/

// variable to hold some text
let text = "";

// update the HTML using the information from the object using for .. in loop
for(var item in scooby)
    text += `<b>${item}:</b> ${scooby[item]} <br>`;

// display the output of the key and value pairs (object properties) in the
// output3 id in the HTML
document.getElementById("output3").innerHTML = text;

// next, allow for the user to search for a dog
// first, make an array to hold the dog objects
var dogList = [];

// next, add each dog object to the list using .push() function
dogList.push(snoopy);
dogList.push(scooby);
dogList.push(scrappy);

// check to see if the dogs were populated, use .forEach on the dogList array
dogList.forEach(dog => {
    // loop through the key / value pairs and display to the console
    for(var item in dog)
    {
        console.log(`${item}: ${dog[item]}`);
    }
    // display a dotted line to separate the outputs
    console.log("-----------------------------");
});

// implement the search function
function search()
{
    // variable to hold the result of the search term from the text box in the HTML page
    var searchTerm = document.getElementById("dogName").value;

    // use the find() from the dogList array to check to see if the dog.name property
    // matches any of the dog object instances in the array
    var result = dogList.find(dog => dog.name == searchTerm);

    // check to see if the result has a value
    if(result)  
    {
        // if the result is not null, extract info from the dog object and 
        // add to the outputs
        var text = `<b>${result.name}</b> was found!<br>`;

        // loop through the dog object and add on to the text variable
        for(var item in result)
            text += `<b>${item}: </b>${result[item]} <br>`;

        // add the key/value information to output4 id
        document.getElementById("output4").innerHTML = text;

        // add the information for myGreeting() call to the output5 id
        document.getElementById("output5").innerHTML = result.myGreeting();
    }
    else
    {
        // if the result is null, display error
        document.getElementById("output4").innerHTML = `<b>ERROR: </b> ${searchTerm} was not found. Try again.`;
        document.getElementById("output5").innerHTML = "";  
    }
}