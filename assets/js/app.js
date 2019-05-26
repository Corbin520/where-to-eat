

// empty array that will hold the restaurants
var finalLocation = document.getElementById("where-you-are-eating")
var whereToEat = []

// get value of form from submit button
$("#submit-button").on("click", function() {
    // get the value
    var userInput = $("#places-input").val().trim(); 

    // split the user Input from a string to single restaurants
    whereToEat = whereToEat.concat(userInput.split(", "));

    // call the function that returns the random restaurants
    randomize();
})

function randomize() {

    var randomPlace = Math.floor(Math.random() * whereToEat.length);
    var randomResponse = whereToEat[randomPlace];
    console.log(randomResponse)
}




