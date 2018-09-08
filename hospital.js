
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

// Reference messages collection
var messagesRef = firebase.database().ref('hospital');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  
  var county = getInputVal('county');
  var hospital = getInputVal('hospital');
  var name = getInputVal('name');
  var id = getInputVal('id');
  var diagnosis = getInputVal('diagnosis');
  var test = getInputVal('test');
  var medicine = getInputVal('medicine');
  var  time=  getInputVal('time');
  var message = getInputVal('message');
  
  
  // Save message
  saveMessage(county,hospital,name,id,diagnosis,test,medicine,time,message);
//console.log(county,hospital,name,id,diagnosis,test,medicine,time,message);
  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase



function saveMessage(county,hospital,name,id,diagnosis,test,medicine,time,message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    county:county,
    hospital:hospital,
    name: name,
    id:id,
    diagnosis:diagnosis,
    test:test,
    medicine:medicine,
    time:time,
    message:message
  });
}


  //check if a search for patient occurs
document.getElementById('searcher').addEventListener('submit', submitFo);

// Submit form
function submitFo(e){
  e.preventDefault();
  var search= getInputVal('check');
 // console.log(search);

database=firebase.database();
var  getdata= firebase.database();
var ref=database.ref('hospital');

//var count=0;
ref.on("value", function(snapshot) {
 // console.log(snapshot.val());
  var obj=snapshot.val(); //create object of snapshot
  var keys=Object.keys(obj); 
  //console.log(keys);
  var finalstring="";
  for (var i=0; i<keys.length;i++) {
    var k=keys[i];
    var test=obj[k].id;
    var county= "<div><p>county : "+obj[k].county;
    var hospital="</p><p>hospital : "+obj[k].hospital;
    var name="</p><p>Name : "+obj[k].name;
    var id="</p><p>Id : "+obj[k].id;
    var diagnosis="</p><p>Diagnosis : "+obj[k].diagnosis;
    var medicine="</p><p>Medicine : "+obj[k].medicine;
    var message="</p><p>Comments : "+obj[k].message +"</p></div>";
  
 // console.log(county,hospital,name,id,diagnosis,medicine,message);
 // document.getElementById('show').innerHTML=(county+hospital+name+id+diagnosis+medicine+message);
    if(test==search)
    {
        //console.log(county,hospital,name,id,diagnosis,medicine,message);
        finalstring=finalstring+county+hospital+name+id+diagnosis+medicine+message;
        //document.getElementById('show').innerHTML="<h1>" +county + hospital+"</h1>";
        //window.alert(county,hospital,name,id,diagnosis,medicine,message);
        document.getElementById('show').innerHTML=finalstring;
    }
  }
  
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
 //console.log(count);

}


