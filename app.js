$(document).ready(function() {

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA7nGp1gU6fn7w6nnrky6chuEljwLZ8YSg",
    authDomain: "countdown-3bf7f.firebaseapp.com",
    databaseURL: "https://countdown-3bf7f.firebaseio.com",
    projectId: "countdown-3bf7f",
    storageBucket: "countdown-3bf7f.appspot.com",
    messagingSenderId: "504333421331"
  };
  
  firebase.initializeApp(config);

 var database = firebase.database();

// Establishes click function for button to add train
 $("#inputTrain").on("click", function() {

 	// Grabs form input values from user
     var name = $('#name').val().trim();
     var destination = $('#destination').val().trim();
     var time = $('#hour').val().trim() + ":" + $('#min').val().trim();
     var frequency = $('#frequency').val().trim();

     console.log(name);
     console.log(destination);
     console.log(time);
     console.log(frequency);

     	// Establishes local object for new train data
     	var newTrain = {
         	newName: name,
         	newDestination: destination,
         	firstTrainAt: time,
         	newFrequency: frequency
     	}
     	// Save to DB
     	database.ref().push(newTrain);
     	// Clear forms
     	$("#name").val("");
     	$("#destination").val("");
     	$("#hour").val("");
     	$("#min").val("");
     	$("#frequency").val("");
 	});
 })