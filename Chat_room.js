var firebaseConfig = 
{
      apiKey: "AIzaSyCOQ7troFyN4Q2tt9db0OLtWFuq-mw9sZ4",
      authDomain: "test-d2d8e.firebaseapp.com",
      databaseURL: "https://test-d2d8e-default-rtdb.firebaseio.com",
      projectId: "test-d2d8e",
      storageBucket: "test-d2d8e.appspot.com",
      messagingSenderId: "256825278375",
      appId: "1:256825278375:web:15478801a3a83cef9f8082"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome" + user_name + " ! ";

function addRoom()
{
      room_name = document.getElementById("room_name").ariaValueMax;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "Chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Chat_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}