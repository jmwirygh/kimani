
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

// Reference  collections
var messagesRef = firebase.database().ref('hospital');
var messagesRefs = firebase.database().ref('school');
var messagesRefc = firebase.database().ref('crime');

// Listen for form submit

// Submit form



//function submitFo(e){
  //e.preventDefault();
  var search= 12;      ///THIS VALUE SHOULD BE EQUAL TO THE CITIZEN ID WHEN CITIZEN LOGS IN
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
    var county= "<div><p>appropriate header here</p><br><p>county : "+obj[k].county;
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
        document.getElementById('hospital').innerHTML=finalstring;
    }
  }
  
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
 //console.log(count);

//}



///////PART FOR SCHOOLING DETAILS
database=firebase.database();
var  getdata= firebase.database();
var ref=database.ref('school');

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
    var county= "<div>><p>Form 3</p><p>county : "+obj[k].county;
    var school="</p><p>school : "+obj[k].school;
    var name="</p><p>Name : "+obj[k].name;
    var id="</p><p>Id : "+obj[k].id;
    var exam="</p><p>Exam type : "+obj[k].exam;
    var mark="</p><p>Mark : "+obj[k].mark;
    var grade="</p><p>Grade : "+obj[k].grade;
    var date="</p><p>Date : "+obj[k].time;
    var message="</p><p>Comments : "+obj[k].message +"</p></div>";

  
 // console.log(county,hospital,name,id,diagnosis,medicine,message);
 // document.getElementById('show').innerHTML=(county+hospital+name+id+diagnosis+medicine+message);
    if(test==search)
    {
        //console.log(county,hospital,name,id,diagnosis,medicine,message);
        finalstring=finalstring+county+school+name+id+exam+mark+grade+date+message;
        //document.getElementById('show').innerHTML="<h1>" +county + hospital+"</h1>";
        //window.alert(county,hospital,name,id,diagnosis,medicine,message);
        document.getElementById('school').innerHTML=finalstring;
    }
  }
  
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});






///////PART FOR crime DETAILS
database=firebase.database();
var  getdata= firebase.database();
var ref=database.ref('crime');

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
    var location="</p><p>Crime area : "+obj[k].location;
    var name="</p><p>Name : "+obj[k].name;
    var id="</p><p>Id : "+obj[k].id;
    var offence="</p><p>Offence : "+obj[k].offence;
    var description="</p><p>Description : "+obj[k].description;
    var evidence="</p><p>Evidence : "+obj[k].evidence;
    var date="</p><p>Date : "+obj[k].time;
    var officer="</p><p>Officer on duty : "+obj[k].officer;
    var message="</p><p>Comments : "+obj[k].message +"</p></div>";

  
 // console.log(county,hospital,name,id,diagnosis,medicine,message);
 // document.getElementById('show').innerHTML=(county+hospital+name+id+diagnosis+medicine+message);
    if(test==search)
    {
        //console.log(county,hospital,name,id,diagnosis,medicine,message);
        finalstring=finalstring+county+location+name+id+offence+description+evidence+officer+date+message;
        //document.getElementById('show').innerHTML="<h1>" +county + hospital+"</h1>";
        //window.alert(county,hospital,name,id,diagnosis,medicine,message);
        document.getElementById('crime').innerHTML=finalstring;
    }
  }
  
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

