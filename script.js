let profileDiv = document.querySelector('#content');
let firstPerson = document.querySelector("#first");
let secondPerson = document.querySelector("#second");
let thirdPerson = document.querySelector("#third");
let fourthPerson = document.querySelector("#fourth");

// setup first onclick event for our a tag
// function to repeat display and setting up profile cards
function profileSetup(personNum) {
    
    // erase previous profile 
    profileDiv.innerHTML = "";
    // create four new elements
    let newDiv = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let button = document.createElement("button");
    let buttonDiv = document.createElement("div");
    
    p1.innerHTML = "My name is "+ info[personNum].firstName + " " + info[personNum].lastName;
    p2.innerHTML = "I am " + info[personNum].heightFeet + " feet " + info[personNum].heighInches + " inches";
    p3.innerHTML = "My favorite food is " + info[personNum].favoriteFood + " and my favorite color is " + info[personNum].favoriteColor;
    button.innerHTML = "Who am I?";

    // div changes style
    newDiv.style.color = "white";
    newDiv.style.fontSize = "50px";
    newDiv.style.margin = "5% 20% 5% 20%";
    newDiv.style.padding = "30px";
    newDiv.style.border = "solid black 5px";
    
    // style button (optional)
    button.style.backgroundColor = "cyan";
    button.style.width = "150px";
    button.style.height = "100px";
    button.style.fontSize = "24px";
    button.style.fontWeight = "bold";
    
    buttonDiv.appendChild(button);
    buttonDiv.style.textAlign = "center";

    // append p tags
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);
    newDiv.appendChild(buttonDiv);
    // append div
    profileDiv.appendChild(newDiv);
}

firstPerson.onclick = function(event) {
    event.preventDefault();
    profileSetup(0);
    let introButton = document.querySelector("button");
    introButton.onclick = function(event) {
        info[0].sayFullName();
    }
    
}
secondPerson.onclick = function(event) {
    event.preventDefault();
    profileSetup(1);
    let introButton = document.querySelector("button");
    introButton.onclick = function(event) {
        info[1].sayFullName();
    }
}
thirdPerson.onclick = function(event) {
    event.preventDefault();
    profileSetup(2);
    let introButton = document.querySelector("button");
    introButton.onclick = function(event) {
        info[2].sayFullName();
    }
}
fourthPerson.onclick = function(event) {
    event.preventDefault();
    profileSetup(3);
    let introButton = document.querySelector("button");
    introButton.onclick = function(event) {
        info[3].sayFullName();
    }
}


let info = {
    0: {
        firstName: "Francisco",
        lastName: "Bermúdez",
        heightFeet: "6",
        heighInches: "3",
        favoriteFood: "pupusas",
        favoriteColor: "pink",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    1: {
        firstName: "Justin",
        lastName: "Lema",
        heightFeet: "5",
        heighInches: "6",
        favoriteFood: "mango",
        favoriteColor: "cyan",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    2: {
        firstName: "Jaden",
        lastName: "Halevi",
        heightFeet: "6",
        heighInches: "1",
        favoriteFood: "apple",
        favoriteColor: "red",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    3: {
        firstName: "Hugo",
        lastName: "Arica",
        heightFeet: "6",
        heighInches: "10",
        favoriteFood: "BoomShoes",
        favoriteColor: "blue",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
}