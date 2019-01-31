

// // This is our API key
// var APIKey = "AIzaSyDAg2hvRFvjT1K7pOD3KAinx-Udn8EJ5KM";

// // Here we are building the URL we need to query the database
// var queryURL = "https://maps.googleapis.com/maps/api/directions/" + APIKey;

// // Here we run our AJAX call to the google directions API
// $.ajax({
//   url: queryURL,
//   method: "GET"
// })
//   // We store all of the retrieved data inside of an object called "response"
//   .then(function(response) {

//     // Log the queryURL
//     console.log(queryURL);

//     // Log the resulting object
//     console.log(response);
//   })

var map;
function initMap() {
	// Initialize a map looking at Calgary AB
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.04864, lng: -114.0708},
    zoom: 8
  });
}