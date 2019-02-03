// Random Integer
let random = Math.floor(Math.random()*4);

// Display Title from Array based on Integer
var recipes = ["Drop-Dead Donuts", "Curl-Your-Toes Cupcakes", "Kiss-Me-Calories Cupcakes",
"Pebble-Crusted Perfection", "Dangerous Delight Cupcakes"];

var title = document.getElementById("recipeTitle");
title.innerHTML = recipes[random];


// Array of prep time that corresponds with recipes array.
var times = ["1 hour", "2 hours", "20 min", "3 hours", "3 days"];

var time = document.getElementById("prepTime");
time.innerHTML = times[random];


// List of Ingrediants that corresponds with recipes array and based on random Integer.
var ingrediants = [["Flour", "milk", "eggs", "sugar"], 
                  ["Love", "sprinkles", "magic"],
                  ["Kisses", "calories", "crunchies"],
                  ["Fruity Peppbles", "eggs", "frosting"],
                  ["Danger", "Dellight", "Deliciousness"]];

var ingrediantUl = document.getElementById("ingrediantsList");

for (i = 0; i < ingrediants[random].length; i++) {
    var listItem = document.createElement('li');
    listItem.innerHTML = ingrediants[random][i];
    ingrediantUl.appendChild(listItem);
}

// List of Instructions that corresponds with recipes array and based on random Integer.

var instructions = [["Gather Ingrediants", "Mix wet stuff", "Add dry stuff", "bake", "Enjoy!"]
                    ["Get your stuff", "Sir thoroughly", "Bake", "Eat!"]
                    ["Obtain stuff", "Stir all together", "Bake", "Feast!"]
                    ["Get all ingrediants", "Shaken, not stirred.", "Roast", "Devour!"]
                    ["Shop for your things", "Slosh into bowl", "Broil", "Try to choke down"]];

var instructionsOl = document.getElementById("recipeInstructions");

for (i = 0; i < instructions[random].length; i++) {
    var step = document.createElement('li');
    step.innerHTML = instructions[random][i];
    instructionsOl.appendChild(step);
}




