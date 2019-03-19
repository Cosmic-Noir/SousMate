// Password verification JavaScript Practice

// Use regular exprssion to check the validation of the password.

let regAlpha = /[a-z]+/i;
let regNum = /[0-9]+/;
let specChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;  

let errorArray = [];

/* Now must design function that takes 2 arguements, username and password,
check to see if password matches password chosen, using the previous function
created. Also check that username matches username chosen. */
let username = "TestUser";
let passwordOne = "!validpassword1"

let loginUser = document.getElementById("userName").value;
let loginPass = document.getElementById("pass").value;
let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", validateInfo(loginUser, loginPass)); // Previous error - Error: Uncaught TypeError: loginBtn.addEventListener is not a function

function validateInfo(loginUser, loginPass) {
    if (loginUser == "" || loginPass == "") {
        alert("Password or username is empty!"); // Does not work. 
    } else if (loginPass.length < 8) {          
        errorArray.push("Your password must be 8 characters or longer.");
    } else if (!loginPass.match(regAlpha)) {
        errorArray.push("Password must contain at least one letter.");
    } else if (!loginPass.match(regNum)) {
        errorArray.push("Password must contain at least one number. ");
    } else if (!loginPass.match(specChar)) {
        errorArray.push("Password must contain at least one special character.");
        alert(errorArray);
    } else if (errorArray.length > 0) {   
        alert(errorArray.join("\n")); // Does not list each item - May need to iterate through the array
    } else if (loginUser !== username) {
        alert("Error: Username not recognized.");
    } else if (loginPass !== passwordOne) {
        alert("Error: Incorrect password.");
    } else {
        alert("Welcome back, " + username);
        //window.location.href= 'profile.html'; For redirection to profile page
    }
}

// None of these work.
console.log(errorArray);
console.log(loginUser);
console.log(loginPass)
 

/* Function to maybe iterate through errorArray to display 
function errorList() {
    for (let i = 0; i < errorArray.length; i++) {
        errorArray[i]
    }
}
*/