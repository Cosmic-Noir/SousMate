// Recipes Object

var recipes = {
    'Drop-Dead Donuts': {
        title: "Drop-Dead Donuts",
        prepTime: 1,
        ingrediants: ["Flour", "milk", "eggs", "sugar"],
        instructions: ["Mix wet stuff", "Add dry stuff", "bake", "Enjoy!"],
        linkTitle: '<a href="#title1">Drop-Dead Donuts</a>',
        description: "These murderous donuts are SO good you just might die! Layers of too-rich goodness coaless with frosting in this distrubringly sweet treat.",
        pic: "pics/deathDonut.jpg"
    },
    'Curl-Your-Toes Cupcakes': {
        title: "Curl-Your-Toes Cupcakes",
        prepTime: 2,
        ingrediants: ["Love", "sprinkles", "magic"],
        instructions: ["Sir thoroughly", "Bake", "Eat!"],
        linkTitle: '<a href="#title2">Curl-Your-Toes Cupcakes</a>',
        description: "These toe-curlers will make your hair stand on end! You had best have a sweet tooth as these bad boys are filled with ooey-gooey goodness.",
        pic: "pics/cupcake5.jpg"

    },
    'Kiss-Me-Calories Cupcakes': {
        title: "Kiss-Me-Calories Cupcakes",
        prepTime: 0.5,
        ingrediants: ["Kisses", "calories", "crunchies"],
        instructions: ["Stir all together", "Bake", "Feast!"],
        linkTitle: '<a href="#title3">Kiss-Me-Calories Cupcakes</a>',
        description: "Prepare for a cupcake so good you're going to want to kiss it. Again and again! Rich and moist with unlimited room for naughty frosting, these are a party pleaser!",
        pic: "pics/cupcake6.jpg"
    },
    'Pebble-Crusted Perfection': {
        title: "Pebble-Crusted Perfection",
        prepTime: 3,
        ingrediants: ["Fruity Peppbles", "eggs", "frosting"],
        instructions: ["Shaken, not stirred.", "Roast", "Devour!"],
        linkTitle: '<a href="#title4">Pebble-Cursted Perfection</a>',
        description: "Crusted in every child's favorite cereal, these colorful and crunchy treats are perfect for small children or adults who want to dream of being care-free",
        pic: "pics/donut2.jpg"
    },
    'Dangerous Delight Cupcakes': {
        title: "Dangerous Delight Cupcakes",
        prepTime: 24,
        ingrediants: ["Danger", "Dellight", "Deliciousness"],
        instructions: ["Slosh into bowl", "Broil", "Try to choke down"],
        linkTitle: '<a href="#title5">Dangerous Delight Cupcakes</a>',
        description: "DANGER! These are TOO good! People just might be willing to kill you for more of these! Roasted, broiled, and devil-cake branded, prepare for an assault of awesome.",
        pic: "pics/cupcake7.jpg"
    },
    
};


// Random Integer Creator, rounded 0-4: 

let random = Math.floor(Math.random()*4); 
console.log(random); // works
console.log(recipes); // works

/* Recipes Page - Dynamically populate list of recipes and populate all recipes in their own Div.*/ 

// Populating list with link to each recipe. - 

var linkedTitles = [recipes['Drop-Dead Donuts'].linkTitle, 
recipes['Curl-Your-Toes Cupcakes'].linkTitle, 
recipes['Kiss-Me-Calories Cupcakes'].linkTitle, 
recipes['Pebble-Crusted Perfection'].linkTitle, 
recipes['Dangerous Delight Cupcakes'].linkTitle];

var titleList = document.getElementById("recipeList");

for (i = 0; i < linkedTitles.length; i++) {
    var listTitle = document.createElement('li');
    listTitle.innerHTML = linkedTitles[i];
    titleList.appendChild(listTitle);
}

/* Need to populate each recipe from arrays. Unclear if there is a way 
to itterate through different divs. For now will simply create 
an array of each property and populate from there. */

var nonLinkedTitles = [recipes['Drop-Dead Donuts'].title, 
recipes['Curl-Your-Toes Cupcakes'].title, 
recipes['Kiss-Me-Calories Cupcakes'].title, 
recipes['Pebble-Crusted Perfection'].title, 
recipes['Dangerous Delight Cupcakes'].title];

// Title using linkedTitles array:

let title1 = document.getElementById("title1");
title1.innerHTML = nonLinkedTitles[0];

let title2 = document.getElementById("title2");
title2.innerHTML = nonLinkedTitles[1];

let title3 = document.getElementById("title3");
title3.innerHTML = nonLinkedTitles[2];

let title4 = document.getElementById("title4");
title4.innerHTML = nonLinkedTitles[3];

let title5 = document.getElementById("title5");
title5.innerHTML = nonLinkedTitles[4];


// Prep Time using timeArray:

let timeArray = [recipes['Drop-Dead Donuts'].prepTime, 
    recipes['Curl-Your-Toes Cupcakes'].prepTime, 
    recipes['Kiss-Me-Calories Cupcakes'].prepTime, 
    recipes['Pebble-Crusted Perfection'].prepTime, 
    recipes['Dangerous Delight Cupcakes'].prepTime];

let time1 = document.getElementById("time1");
time1.innerHTML = timeArray[0] + " Hour";

let time2 = document.getElementById("time2");
time2.innerHTML = timeArray[1] + " Hours";

let time3 = document.getElementById("time3");
time3.innerHTML = timeArray[2] + " Hours";

let time4 = document.getElementById("time4");
time4.innerHTML = timeArray[3] + " Hours";

let time5 = document.getElementById("time5");
time5.innerHTML = timeArray[4] + " Hours";

/* Ingrediants adding to ol. */

let ingrediantsArray = [recipes['Drop-Dead Donuts'].ingrediants, 
    recipes['Curl-Your-Toes Cupcakes'].ingrediants, 
    recipes['Kiss-Me-Calories Cupcakes'].ingrediants, 
    recipes['Pebble-Crusted Perfection'].ingrediants, 
    recipes['Dangerous Delight Cupcakes'].ingrediants]; 


console.log(ingrediantsArray); // Verifies creates an array of ingrediant array.
console.log(ingrediantsArray[0].length); // Lists # of ingrediants in first index

    // Drop-Dead Donuts
    let ingrediants1 = document.getElementById("ingrediants1");
    for (i = 0; i < ingrediantsArray[0].length; i++) {
        let ingrediantItem = document.createElement('li');
        ingrediantItem.innerHTML = ingrediantsArray[0][i];
        ingrediants1.appendChild(ingrediantItem);
    }

    // Curl-Your-Toes Cupcakes
    let ingrediants2 = document.getElementById("ingrediants2");
    for (i = 0; i < ingrediantsArray[1].length; i++) {
        let ingrediantItem = document.createElement('li');
        ingrediantItem.innerHTML = ingrediantsArray[1][i];
        ingrediants2.appendChild(ingrediantItem);
    }

    // Kiss-Me-Calories Cupcakes
    let ingrediants3 = document.getElementById("ingrediants3");
    for (i = 0; i < ingrediantsArray[2].length; i++) {
        let ingrediantItem = document.createElement('li');
        ingrediantItem.innerHTML = ingrediantsArray[2][i];
        ingrediants3.appendChild(ingrediantItem);
    }

    // Pebble-Crusted Perfection
    let ingrediants4 = document.getElementById("ingrediants4");
    for (i = 0; i < ingrediantsArray[3].length; i++) {
        let ingrediantItem = document.createElement('li');
        ingrediantItem.innerHTML = ingrediantsArray[3][i];
        ingrediants4.appendChild(ingrediantItem);
    }

    // Dangerous Delight Cupcakes
    let ingrediants5 = document.getElementById("ingrediants5");
    for (i = 0; i < ingrediantsArray[4].length; i++) {
        let ingrediantItem = document.createElement('li');
        ingrediantItem.innerHTML = ingrediantsArray[4][i];
        ingrediants5.appendChild(ingrediantItem);
    }

// Recipe Description:

let descriptionArray = [recipes['Drop-Dead Donuts'].description, 
    recipes['Curl-Your-Toes Cupcakes'].description, 
    recipes['Kiss-Me-Calories Cupcakes'].description, 
    recipes['Pebble-Crusted Perfection'].description, 
    recipes['Dangerous Delight Cupcakes'].description]; 

    // Drop-Dead Donuts
    let description1 = document.getElementById("description1");
    description1.innerHTML = descriptionArray[0];

    // Curl-Your-Toes Cupcakes
    let description2 = document.getElementById("description2");
    description2.innerHTML = descriptionArray[1];

    // Kiss-Me-Calories Cupcakes
    let description3 = document.getElementById("description3");
    description3.innerHTML = descriptionArray[2];

    // Pebble-Crusted Perfection
    let description4 = document.getElementById("description4");
    description4.innerHTML = descriptionArray[3];

    // Dangerous Delight Cupcake
    let description5 = document.getElementById("description5");
    description5.innerHTML = descriptionArray[4];


/* Instructions adding to ol. */

let instructionsArray = [recipes['Drop-Dead Donuts'].instructions,
    recipes['Curl-Your-Toes Cupcakes'].instructions, 
    recipes['Kiss-Me-Calories Cupcakes'].instructions, 
    recipes['Pebble-Crusted Perfection'].instructions, 
    recipes['Dangerous Delight Cupcakes'].instructions]; 

    // Drop-Dead Donuts
    let instructions1 = document.getElementById("instructions1");
    for (i = 0; i < instructionsArray[0].length; i++) {
        let instructionStep = document.createElement('li');
        instructionStep.innerHTML = instructionsArray[0][i];
        instructions1.appendChild(instructionStep);
    }

    // Curl-Your-Toes Cupcakes
    let instructions2 = document.getElementById("instructions2");
    for (i = 0; i < instructionsArray[1].length; i++) {
        let instructionStep = document.createElement('li');
        instructionStep.innerHTML = instructionsArray[1][i];
        instructions2.appendChild(instructionStep);
    }

    // Kiss-Me-Calories Cupcakes
    let instructions3 = document.getElementById("instructions3");
    for (i = 0; i < instructionsArray[2].length; i++) {
        let instructionStep = document.createElement('li');
        instructionStep.innerHTML = instructionsArray[2][i];
        instructions3.appendChild(instructionStep);
    }

    // Pebble-Crusted Perfection
    let instructions4 = document.getElementById("instructions4");
    for (i = 0; i < instructionsArray[3].length; i++) {
        let instructionStep = document.createElement('li');
        instructionStep.innerHTML = instructionsArray[3][i];
        instructions4.appendChild(instructionStep);
    }

    // Dangerous Delight Cupcake
    let instructions5 = document.getElementById("instructions5");
    for (i = 0; i < instructionsArray[4].length; i++) {
        let instructionStep = document.createElement('li');
        instructionStep.innerHTML = instructionsArray[4][i];
        instructions5.appendChild(instructionStep);
    }

/* Creating timer, starting at higher count and going down 
one second each. */

// Creates an array of each timer class element
let timerArray = document.getElementsByClassName("timer");

console.log(timerArray); 
// displays each element, but unclear if we can use this to append each one.  

// Create new array of seconds based on hourly listed in timeArray.
let secondsArray = timeArray.map(number => {
    return number * 60 * 60;
})

console.log(secondsArray); // shows timeArray converted to seconds.

// Use seconds array to set innerHTML of each individual ID. 

let timer1 = document.getElementById("timer1");
timer1.innerHTML = secondsArray[0];

let timer2 = document.getElementById("timer2");
timer2.innerHTML = secondsArray[1];

let timer3 = document.getElementById("timer3");
timer3.innerHTML = secondsArray[2];

let timer4 = document.getElementById("timer4");
timer4.innerHTML = secondsArray[3];

let timer5 = document.getElementById("timer5");
timer5.innerHTML = secondsArray[4];

console.log(timerArray);

/* Button Timers - Includes button to start timer and button to stop timer.
Should be a way for me to add a parameter to reduceTime1 function so that 
I can use alt functions as arguments, but attempting this has not worked. 
Also should be able to .addEventListener() to a class, but unsure how
to get this to correspond to correc time for each h5 element per recipe*/

// Drop-Dead Donuts
// Gets and sets the timer display and reduces value by 1.
function counter1 () {
    let time = document.getElementById("timer1");
    time.innerHTML = secondsArray[0];
    secondsArray[0]--;

}
// Calls the counter function after 1000 ms.
function reduceTime1 () {
    t1 = setInterval(counter1, 1000);
}
// Adds a "click" event listener and calls the reduceTime1 function.
document.getElementById("start1").addEventListener("click", reduceTime1);

//Attempting to use clearInterval() method to stop timer:
function clearVal1 () {
    clearInterval(t1);
}
document.getElementById("stop1").addEventListener("click", clearVal1);

// Curl-Your-Toes Cupcakes
function counter2 () {
    let time = document.getElementById("timer2");
    time.innerHTML = secondsArray[1];
    secondsArray[1]--;
}

function reduceTime2 () {
    t2 = setInterval(counter2, 1000);
}

let button2 = document.getElementById("start2").addEventListener("click", reduceTime2);

function clearVal2() {
    clearInterval(t2);
}
document.getElementById("stop2").addEventListener("click", clearVal2);

// Kiss-Me-Calories Cupcakes
function counter3 () {
    let time = document.getElementById("timer3");
    time.innerHTML = secondsArray[2];
    secondsArray[2]--;
}

function reduceTime3 () {
    t3 = setInterval(counter3, 1000);
}

let button3 = document.getElementById("start3").addEventListener("click", reduceTime3);

function clearVal3() {
    clearInterval(t3);
}
document.getElementById("stop3").addEventListener("click", clearVal3);


// Pebble-Crusted Perfection
function counter4 () {
    let time = document.getElementById("timer4");
    time.innerHTML = secondsArray[3];
    secondsArray[3]--;
}

function reduceTime4 () {
    t4 = setInterval(counter4, 1000);
}

let button4 = document.getElementById("start4").addEventListener("click", reduceTime4);

function clearVal4() {
    clearInterval(t4);
}
document.getElementById("stop4").addEventListener("click", clearVal4);

// Dangerous Delight Cupcakes
function counter5 () {
    let time = document.getElementById("timer5");
    time.innerHTML = secondsArray[4];
    secondsArray[4]--;
}

function reduceTime5 () {
    t5 = setInterval(counter5, 1000);
}

let button5 = document.getElementById("start5").addEventListener("click", reduceTime5);

function clearVal5() {
    clearInterval(t5);
}
document.getElementById("stop5").addEventListener("click", clearVal5);