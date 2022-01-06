const firebaseConfig = {
    apiKey: "AIzaSyAiA9hR_NI618kxPlE93kRocc5Jeh_kDbs",
    authDomain: "lets-chat-cbab1.firebaseapp.com",
    databaseURL: "https://lets-chat-cbab1-default-rtdb.firebaseio.com",
    projectId: "lets-chat-cbab1",
    storageBucket: "lets-chat-cbab1.appspot.com",
    messagingSenderId: "712009111264",
    appId: "1:712009111264:web:8400343c5e329180aa2285"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function adduser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        user :"user_1"
    });
}

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !!!";

function add_Room(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding user"
    });

    localStorage.setItem("room_name",room_name);
    window.location = "Kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room_name - " + Room_names);
row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirect(this.id)'> #"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirect(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "Kwitter_page.html";
}