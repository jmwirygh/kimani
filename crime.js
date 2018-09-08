
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

// Reference school collection
var messagesRef = firebase.database().ref('crime');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  
  var county = getInputVal('county');
  var location = getInputVal('location');
  var name = getInputVal('name');
  var id = getInputVal('id');
  var offence = getInputVal('offence');
  var description = getInputVal('description');
  var evidence = getInputVal('evidence');
  var  time=  getInputVal('time');
  var  officer=  getInputVal('officer');
  var message = getInputVal('message');
  
  
  // Save message
  saveMessage(county,location,name,id,offence,description,evidence,time,officer,message);
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



function saveMessage(county,location,name,id,offence,description,evidence,time,officer,message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    county:county,
    location:location,
    name: name,
    id:id,
    offence:offence,
    description:description,
    evidence:evidence,
    time:time,
    officer:officer,
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
var ref=database.ref('crime');

//var count=0;
ref.on("value", function(snapshot) {
 // console.log(snapshot.val());
  var obj=snapshot.val(); //create object of snapshot
  var keys=Object.keys(obj); 
  //console.log(keys);
  //county,location,name,id,offence,description,evidence,time,officer,message
  var finalstring="";
  for (var i=0; i<keys.length;i++) {
    var k=keys[i];
    var test=obj[k].id;
    var county= "<div><p>County : "+obj[k].county;
    var location="</p><p>Location : "+obj[k].location;
    var name="</p><p>Name : "+obj[k].name;
    var id="</p><p>Id : "+obj[k].id;
    var offence="</p><p>Offence Commited : "+obj[k].offence;
    var description="</p><p>Description : "+obj[k].description;
    var evidence="</p><p>Evidence : "+obj[k].evidence;
    var time="</p><p>Date : "+obj[k].time;
    var officer="</p><p>Officer : "+obj[k].officer;
    var message="</p><p>Comments : "+obj[k].message +"</p></div>";
  
 // console.log(county,hospital,name,id,diagnosis,medicine,message);
 // document.getElementById('show').innerHTML=(county+hospital+name+id+diagnosis+medicine+message);
    if(test==search)
    {
        //console.log(county,hospital,name,id,diagnosis,medicine,message);
        finalstring=finalstring+county+location+name+id+offence+description+evidence+time+officer+message;
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


