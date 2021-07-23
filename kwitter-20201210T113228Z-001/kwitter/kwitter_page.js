
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

    var roomName = localStorage.getItem("room_name");
    var NameUser = localStorage.getItem("Username");
   
function Send() {
msg = document.getElementById("msg").value;
firebase.database().ref(roomName).push({
      name:NameUser,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}


function Logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}


function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["message"];
like = message_data["like"];

NameDisplayHTML = "<h3>" + name + "<img class = 'user_tick' src = 'tick.png'></h3>";
MsgDisplay = "<h4 class = 'message_h4'>"+ message + "</h4>";
likeButton = "<button class = 'btn btn-info' id =" + firebase_message_id + "value=" + like + "onclick = 'updateLike(this.id)'>";
LikeDisplay = "<span class = 'glyphicon glyphicon-thumbs-up'>Likes:" + like + "</span> </button> <hr>";

row = NameDisplayHTML + MsgDisplay + likeButton + LikeDisplay;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();



function updateLike(message_id)
{
      console.log("clicked on button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("index.html")
}


