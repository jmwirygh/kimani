// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/7lEU1UEw3YI

var canvas;
var score;
var button;
var initialInput;
var submitButton;
var database;

function setup() {
  canvas = createCanvas(100, 100);
  score = 0;
  createP('Click the button to get points.')
  button = createButton('click');
  button.mousePressed(increaseScore);
  initialInput = createInput('initials');
  submitButton = createButton('submit');
  submitButton.mousePressed(submitScore);

   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAqjJbMjDW6qmwpJBR_wiNXv2F9P8rFArU",
    authDomain: "data-87fe3.firebaseapp.com",
    databaseURL: "https://data-87fe3.firebaseio.com",
    projectId: "data-87fe3",
    storageBucket: "",
    messagingSenderId: "508199654883"
  };
  firebase.initializeApp(config);
  //console.log(firebase);
  database = firebase.database();
}

function submitScore() {
  var data = {
    initials: initialInput.value(),
    score: score
  }
  console.log(data);
  var ref = database.ref('scores');
  ref.push(data);
}

function increaseScore() {
  score++;
}

function draw() {
  background(0);
  textAlign(CENTER);
  textSize(32);
  fill(255);
  text(score, width / 2, height / 2);
}
 
<!-- Firebase App is always required and must be first -->
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js"></script>

<!-- Add additional services you want to use -->
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-messaging.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-functions.js"></script>

<!-- Comment out (or don't include) services you don't want to use -->
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-storage.js"></script> 