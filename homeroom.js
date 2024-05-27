const firebaseConfig = {
    apiKey: "AIzaSyA-YBvZybQN-FEPWM_T7W9GytCWUYcWDHk",
    authDomain: "kwitter-1ec89.firebaseapp.com",
    databaseURL: "https://kwitter-1ec89-default-rtdb.firebaseio.com",
    projectId: "kwitter-1ec89",
    storageBucket: "kwitter-1ec89.appspot.com",
    messagingSenderId: "381693189188",
    appId: "1:381693189188:web:29c8a2e168f73a82cff011",
    measurementId: "G-SGRV4JMKV3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE



function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                row = "<div class = `room_name` onclick = redirectToRoom(this.id) id = " + Room_names + ">" + Room_names + "</div> <hr>";
                document.getElementById("output").innerHTML += row;
                //End code
          });
    });
}
getData();

function addroom() {
    roomName = document.getElementById("room").value;
    firebase.database().ref("/").child(roomName).update({
          purpose: "adding new room again"
    })
    localStorage.setItem("roomName", roomName);
    window.location = "letsChat_page.html";

}

function redirectToRoom(id) {
    localStorage.setItem("roomName", id);
    window.location = "letsChat_page.html";
}

function logout() {
    localStorage.removeItem("username");
    window.location = "index.html";
}

function showName() {
    var name = localStorage.getItem("username");

    document.querySelector(".title").innerHTML = "Hello  " + name;
}

showName();
