

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

// try below method. on press
// on press

$("#places-input").on("keypress", function(event) {
        event.preventDefault()
    
        var userInput = $("#places-input").val().trim(); 
    
        whereToEat = whereToEat.concat(userInput.split(", "));
    
        randomize();
    
        $("#places-input").hide();
        $("#submit-button").hide();
    
        $("#random-option").show();
        $("#where-you-are-eating").show();
    })
    

    // function that takes in our users input and gives back a random 
    function randomize() {
        
        var randomPlace = Math.floor(Math.random() * whereToEat.length);
        randomResponse = whereToEat[randomPlace];
        finalLocation.textContent = randomResponse;
    }
    
    // Google Maps
    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7608, lng: -111.8910},
        zoom: 9
      });
    }








