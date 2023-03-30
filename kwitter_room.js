
var firebaseConfig = {
      apiKey: "AIzaSyDnCBHO8Zx2gXNsl2sNipYqxP-MZWABTok",
      authDomain: "kwitter-14d2f.firebaseapp.com",
      databaseURL: "https://kwitter-14d2f-default-rtdb.firebaseio.com",
      projectId: "kwitter-14d2f",
      storageBucket: "kwitter-14d2f.appspot.com",
      messagingSenderId: "464348772271",
      appId: "1:464348772271:web:8c546d0aa0c3657d61a15a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       
       console.log("Room Name -" + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(Name)
{
      console.log(name);
      localStroage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}