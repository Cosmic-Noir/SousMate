// Random Integer
let random = Math.floor(Math.random()*4);

// Display Title from Array based on Integer
var recipes = ['<a href="index.html">Drop-Dead Donuts</a>', '<a href="#">Curl-Your-Toes Cupcakes</a>', 
              '<a href="#">Kiss-Me-Calories Cupcakes</a>', '<a href="#">Pebble-Crusted Perfection</a>',
              '<a href="#">Dangerous Delight Cupcakes</a>'];

var title = document.getElementById("recipeTitle");
title.innerHTML = recipes[random];

// Display the list of recipes using recipes array and Random Integer

var titleList = document.getElementById("recipeList");

for (i = 0; i < recipes.length; i++) {
       var listTitle = document.createElement('li');
       listTitle.innerHTML = recipes[i];
       titleList.appendChild(listTitle);
}

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

var instructions = [["Mix wet stuff", "Add dry stuff", "bake", "Enjoy!"],
                    ["Sir thoroughly", "Bake", "Eat!"],
                    ["Stir all together", "Bake", "Feast!"],
                    ["Shaken, not stirred.", "Roast", "Devour!"],
                    ["Slosh into bowl", "Broil", "Try to choke down"]];

var instructionsOl = document.getElementById("recipeInstructions");

for (i = 0; i < instructions[random].length; i++) {
    var step = document.createElement('li');
    step.innerHTML = instructions[random][i];
    instructionsOl.appendChild(step);
}

// Index Recipe Description random populator based on random Integer. - NOT WORKING

var descrip = [["These murderous donuts are SO good you just might die! Layers of too-rich goodness coaless with frosting in this distrubringly sweet treat."],
["These toe-curlers will make your hair stand on end! You had best have a sweet tooth as these bad boys are filled with ooey-gooey goodness."],
["Prepare for a cupcake so good you're going to want to kiss it. Again and again! Rich and moist with unlimited room for naughty frosting, these are a party pleaser!"],
["Crusted in every child's favorite cereal, these colorful and crunchy treats are perfect for small children or adults who want to dream of being care-free"],
["DANGER! These are TOO good! People just might be willing to kill you for more of these! Roasted, broiled, and devil-cake branded, prepare for an assault of awesome."]];



var div = document.getElementById("featured");
       var elem = document.createElement("h5");
       elem.innerHTML = "This is a heading.";
       div.appendChild(elem);



// Will need to learn how to populate images


