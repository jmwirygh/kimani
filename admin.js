function fine()
{
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
 
// Reference school collection   //recheck this
  // get selected from dropdown menu
  //var s= document.getElementById("sel");
  /*var type=function checker(s)
  {
      //var s = document.getElementById("sel").selectedIndex;//document.getElementById("sel");//s.options[s.selectedIndex];//s.options[s.selectedIndex].value;
    // var type=s.options[s.selectedIndex].value;
    return s;

  }*/
  var e=document.getElementById('sel'); 
  var type=e.options[e.selectedIndex].value;
                                          //checker(t);"
if(type=="citizen"){
  var messagesRef = firebase.database().ref("citizen");
   console.log(type);
}
else if(type=="doctor")
{
  var messagesRef = firebase.database().ref("doctor");
   console.log(type);
    
}
else if(type=="police")
{
  var messagesRef = firebase.database().ref("police");
   console.log(type);

}
else if(type=="admin")
{
  var messagesRef = firebase.database().ref("admin");
   console.log(type);

}
else if(type=="registrar")
{
  var messagesRef = firebase.database().ref("registrar");
   console.log(type);

}
else
{
  console.log("empty choice");
}

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var id = getInputVal('id');
  var gender = getInputVal('gender');
  var birth = getInputVal('birth');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var  time=  getInputVal('time');

 // var  officer=  getInputVal('officer');
  //var message = getInputVal('message');
  
  console.log(name,id,gender,birth,email,phone,time,type);
  // Save message
 // saveMessage(name,id,gender,birth,email,phone,time);
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
} //end of function
/*
function saveMessage(name,id,gender,birth,email,phone,time){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    id:id,
    gender:gender,
    birth:birth,
     email:email,
      phone:phone,
    time:time,
  });
}

*/

