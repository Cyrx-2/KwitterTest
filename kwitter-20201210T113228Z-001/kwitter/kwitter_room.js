
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDJGlbLFKyWwHugBigdlVhRPi7QGHI42wE",
  authDomain: "covid-naw9.firebaseapp.com",
  databaseURL: "https://covid-naw9-default-rtdb.firebaseio.com",
  projectId: "covid-naw9",
  storageBucket: "covid-naw9.appspot.com",
  messagingSenderId: "154578867060",
  appId: "1:154578867060:web:d32f1facdda147eef6d221"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    var nameDisplay = localStorage.getItem("Username");
    document.getElementById("username").innerHTML = "Welcome" + nameDisplay;
      console.log(nameDisplay);


    function Add()
    {
      roomName = document.getElementById("Rooms").value;

      firebase.database().ref("/").child(roomName).update({
            purpose: "adding room name"
      });
      localStorage.setItem("rooms" , roomName);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room =" + Room_names);
      row = "<div class = 'rooms' id = " +Room_names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("RoomList").innerHTML = row;
      //End code
      });});}
getData();



      function redirectToRoomName(name)
      {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"
      }

      function Logout() 
      {
        localStorage.removeItem("Username");
        localStorage.removeItem("rooms");
        window.location = "index.html"
      }