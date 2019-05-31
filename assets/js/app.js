

var finalLocation = document.getElementById("random-option");
var whereToEat = []
var randomResponse


// when submit button is hit, run the code
$("#submit-button").on("click", function() {
    
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
// https://developers.google.com/maps/documentation/javascript/geolocation
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7608, lng: -111.8910},
        zoom: 9
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
}




// try below method. on press
// on press

// $("#places-input").on("keypress", function(event) {
    //     event.preventDefault()
    
    //     var userInput = $("#places-input").val().trim(); 
    
    //     whereToEat = whereToEat.concat(userInput.split(", "));
    
    //     randomize();
    
    //     $("#places-input").hide();
    //     $("#submit-button").hide();
    
    //     $("#random-option").show();
    //     $("#where-you-are-eating").show();
    // })




