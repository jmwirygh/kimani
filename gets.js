
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCBRLVXhmZJFQyrNOqte4sRkGDWj4Zwu4k",
    authDomain: "train-74354.firebaseapp.com",
    databaseURL: "https://train-74354.firebaseio.com",
    projectId: "train-74354",
    storageBucket: "train-74354.appspot.com",
    messagingSenderId: "958202060312"
  };
  firebase.initializeApp(config);
   
   database=firebase.database();

var ref=database.ref('county');
ref.on('value',gotData.errData);

function gotData(data){
   console.log(data);
}
function errData(data){
	console.log('Error!');
	console.log(err);
}