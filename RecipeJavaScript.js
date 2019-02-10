// Recipes Object

var recipes = {
    'Drop-Dead Donuts': {
        title: "Drop-Dead Donuts",
        prepTime: "1 Hour",
        ingrediants: ["Flour", "milk", "eggs", "sugar"],
        instructions: ["Mix wet stuff", "Add dry stuff", "bake", "Enjoy!"],
        linkTitle: '<a href="#title1">Drop-Dead Donuts</a>',
        description: "These murderous donuts are SO good you just might die! Layers of too-rich goodness coaless with frosting in this distrubringly sweet treat.",
        pic: "pics/deathDonut.jpg"
    },
    'Curl-Your-Toes Cupcakes': {
        title: "Curl-Your-Toes Cupcakes",
        prepTime: "2 Hours",
        ingrediants: ["Love", "sprinkles", "magic"],
        instructions: ["Sir thoroughly", "Bake", "Eat!"],
        linkTitle: '<a href="#title2">Curl-Your-Toes Cupcakes</a>',
        description: "These toe-curlers will make your hair stand on end! You had best have a sweet tooth as these bad boys are filled with ooey-gooey goodness.",
        pic: "pics/cupcake5.jpg"

    },
    'Kiss-Me-Calories Cupcakes': {
        title: "Kiss-Me-Calories Cupcakes",
        prepTime: "20 Minutes",
        ingrediants: ["Kisses", "calories", "crunchies"],
        instructions: ["Stir all together", "Bake", "Feast!"],
        linkTitle: '<a href="#title3">Kiss-Me-Calories Cupcakes</a>',
        description: "Prepare for a cupcake so good you're going to want to kiss it. Again and again! Rich and moist with unlimited room for naughty frosting, these are a party pleaser!",
        pic: "pics/cupcake6.jpg"
    },
    'Pebble-Crusted Perfection': {
        title: "Pebble-Crusted Perfection",
        prepTime: "3 Hours",
        ingrediants: ["Fruity Peppbles", "eggs", "frosting"],
        instructions: ["Shaken, not stirred.", "Roast", "Devour!"],
        linkTitle: '<a href="#title4">Pebble-Cursted Perfection</a>',
        description: "Crusted in every child's favorite cereal, these colorful and crunchy treats are perfect for small children or adults who want to dream of being care-free",
        pic: "pics/donut2.jpg"
    },
    'Dangerous Delight Cupcakes': {
        title: "Dangerous Delight Cupcakes",
        prepTime: "3 Days",
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
    time1.innerHTML = timeArray[0];

    let time2 = document.getElementById("time2");
    time2.innerHTML = timeArray[1];

    let time3 = document.getElementById("time3");
    time3.innerHTML = timeArray[2];

    let time4 = document.getElementById("time4");
    time4.innerHTML = timeArray[3];

    let time5 = document.getElementById("time5");
    time5.innerHTML = timeArray[4];

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

// Creating img elements and attempting to set to float left

let picArray = [recipes['Drop-Dead Donuts'].pic, recipes['Curl-Your-Toes Cupcakes'].pic, 
recipes['Kiss-Me-Calories Cupcakes'].pic, recipes['Pebble-Crusted Perfection'].pic, 
recipes['Dangerous Delight Cupcakes'].pic];

console.log(picArray); // Verifies creates correct array.

/* Could dynically populate with setting attribute of image
in each section... Not sure if this is more efficient. */






