

function Login(){
    Username = document.getElementById("Login-Input").value;
    localStorage.setItem("Username", Username);
    window.location = "kwitter_room.html";
}