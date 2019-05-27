

var finalLocation = document.getElementById("random-option");
var whereToEat = []
var randomResponse


$("#submit-button").on("click", function() {
    
    var userInput = $("#places-input").val().trim(); 

    whereToEat = whereToEat.concat(userInput.split(", "));

    randomize();

    $("#places-input").hide();
    $("#submit-button").hide();

    $("#random-option").show();
    $("#where-you-are-eating").show();
})

$("#places-input").on("keyup", function(event) {
    event.preventDefault()
    
    var userInput = $("#places-input").val().trim(); 

    whereToEat = whereToEat.concat(userInput.split(", "));

    randomize();

    $("#places-input").hide();
    $("#submit-button").hide();

    $("#random-option").show();
    $("#where-you-are-eating").show();
})

function randomize() {

    var randomPlace = Math.floor(Math.random() * whereToEat.length);
    randomResponse = whereToEat[randomPlace];
    finalLocation.textContent = randomResponse;
}






