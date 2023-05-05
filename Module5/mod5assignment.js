/*
Snoopy 
name: Snoopy
breed: beagle
show: peanuts
*/

//part 1 creating an object literal - json 
var myDog = {
"name": "Snoopy",
"breed": "Beagle",
"tvShow": "Peanuts",
"notes": "Peanuts and other prime-time animated TV specials based upon the comic strip Peanuts.",
"mySound": "I am not scary",
"myGreeting": function(){

    return `<p>Hello, my name is ${this.name}, when I bark ${this.mySound}. <br> I starred in the TV show ${this.tvShow}. <br> My character is a ${this.breed}. In the show, I am ${this.notes}</p>`

}
};

//add the outputs of my greeting from the object literal to the output1 id in the html
document.getElementById("output1").innerHTML = myDog.myGreeting();

//part 2 - create an instance of a dog object using a constructor
// first make a class definition for a dog

class dog{
    //define the constructor

    constructor(name = "",
    breed = "", tvShow = "", mySound = "", notes = "", canTalk = false){
this.name = name;
this.breed = breed;
this.tvShow = tvShow;
this.mySound = mySound;
this.notes = notes;
this.canTalk = canTalk;
    }

    //define the myGreeting function
    myGreeting(){
        //tell whether or not the dog can talk based on the value of the canTalk property
        var talkString = "";

        if(this.canTalk == true)
        talkString = "I can talk";
        else
        talkString = "I cannot talk";
        
        //return the paragraph text

        return `<p>Hello, my name is ${this.name}, when I bark ${this.mySound}. <br> I starred in the TV show ${this.tvShow}. <br> My character is a ${this.breed}. In the show, I am ${this.notes}<br> ${talkString}</p>`

    }

}


let myDogConst = new dog("Snoopy", "Beagle", "Peanuts", "I am not scary", "Peanuts and other prime-time animated TV specials based upon the comic strip Peanuts", false);

//add the output of myGreeting() to the output2 id in html
document.getElementById("output2").innerHTML = myDogConst.myGreeting();
