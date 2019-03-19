// Recipes Object

var recipes = {
    'Drop-Dead Donuts': {
        title: "Drop-Dead Donuts",
        prepTime: "1 Hour",
        ingrediants: ["Flour", "milk", "eggs", "sugar"],
        instructions: ["Mix wet stuff", "Add dry stuff", "bake", "Enjoy!"],
        linkTitle: '<a href="#">Drop-Dead Donuts</a>',
        description: "These murderous donuts are SO good you just might die! Layers of too-rich goodness coaless with frosting in this distrubringly sweet treat.",
        pic: "pics/deathDonut.jpg"
    },
    'Curl-Your-Toes Cupcakes': {
        title: "Curl-Your-Toes Cupcakes",
        prepTime: "2 Hours",
        ingrediants: ["Love", "sprinkles", "magic"],
        instructions: ["Sir thoroughly", "Bake", "Eat!"],
        linkTitle: '<a href="#">Curl-Your-Toes Cupcakes</a>',
        description: "These toe-curlers will make your hair stand on end! You had best have a sweet tooth as these bad boys are filled with ooey-gooey goodness.",
        pic: "pics/cupcake5.jpg"

    },
    'Kiss-Me-Calories Cupcakes': {
        title: "Kiss-Me-Calories Cupcakes",
        prepTime: "20 Minutes",
        ingrediants: ["Kisses", "calories", "crunchies"],
        instructions: ["Stir all together", "Bake", "Feast!"],
        linkTitle: '<a href="#">Kiss-Me-Calories Cupcakes</a>',
        description: "Prepare for a cupcake so good you're going to want to kiss it. Again and again! Rich and moist with unlimited room for naughty frosting, these are a party pleaser!",
        pic: "pics/cupcake6.jpg"
    },
    'Pebble-Crusted Perfection': {
        title: "Pebble-Crusted Perfection",
        prepTime: "3 Hours",
        ingrediants: ["Fruity Peppbles", "eggs", "frosting"],
        instructions: ["Shaken, not stirred.", "Roast", "Devour!"],
        linkTitle: '<a href="#">Pebble-Cursted Perfection</a>',
        description: "Crusted in every child's favorite cereal, these colorful and crunchy treats are perfect for small children or adults who want to dream of being care-free",
        pic: "pics/donut2.jpg"
    },
    'Dangerous Delight Cupcakes': {
        title: "Dangerous Delight Cupcakes",
        prepTime: "3 Days",
        ingrediants: ["Danger", "Dellight", "Deliciousness"],
        instructions: ["Slosh into bowl", "Broil", "Try to choke down"],
        linkTitle: '<a href="#">Dangerous Delight Cupcakes</a>',
        description: "DANGER! These are TOO good! People just might be willing to kill you for more of these! Roasted, broiled, and devil-cake branded, prepare for an assault of awesome.",
        pic: "pics/cupcake7.jpg"
    },
    
};

// Random Integer Creator, rounded 0-4: 

let random = Math.floor(Math.random()*5); 
console.log(random); // works
console.log(recipes); // works


/* Home Page - Dynamically populate one recipe via random integer: title, prep time, and description. */

// Title: Created an array - Thinking I could come up with a function to create the array. 


let titleArray = [recipes['Drop-Dead Donuts'].title, recipes['Curl-Your-Toes Cupcakes'].title, 
recipes['Kiss-Me-Calories Cupcakes'].title, recipes['Pebble-Crusted Perfection'].title, 
recipes['Dangerous Delight Cupcakes'].title];

console.log(titleArray[random]);

let titleName = document.getElementById("recipeTitle");
titleName.innerHTML = titleArray[random]; // Works!
 
// Prep Time: 

let timeArray = [recipes['Drop-Dead Donuts'].prepTime, recipes['Curl-Your-Toes Cupcakes'].prepTime, 
recipes['Kiss-Me-Calories Cupcakes'].prepTime, recipes['Pebble-Crusted Perfection'].prepTime, 
recipes['Dangerous Delight Cupcakes'].prepTime];

let time = document.getElementById("prep");
time.innerHTML = timeArray[random]; 

// Descripton: 

let descriptionArray = [recipes['Drop-Dead Donuts'].description, recipes['Curl-Your-Toes Cupcakes'].description, 
recipes['Kiss-Me-Calories Cupcakes'].description, recipes['Pebble-Crusted Perfection'].description, 
recipes['Dangerous Delight Cupcakes'].description];

let descriptionText = document.getElementById("Description");
descriptionText.innerHTML = descriptionArray[random];

// changing the src attribute of the image!

let picArray = [recipes['Drop-Dead Donuts'].pic, recipes['Curl-Your-Toes Cupcakes'].pic, 
recipes['Kiss-Me-Calories Cupcakes'].pic, recipes['Pebble-Crusted Perfection'].pic, 
recipes['Dangerous Delight Cupcakes'].pic];

console.log(picArray); // Verifies creates correct array.

let featuredImage = document.getElementById("featuredPic");
featuredImage.setAttribute("src", picArray[random]);
if (featuredImage.src == picArray[0]) {
    featuredImage.setAttribute("width", "300px");
};



