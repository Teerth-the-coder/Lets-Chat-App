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
username = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");


function getData() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                name = message_data['name'];
                msg = message_data['message'];
                likes = message_data['likes'];
                name_tag = "<h4>" + name + "<img class=user_tick src=tick.png> </h4>"
                message_tag = "<h4 class=message_h4>" + msg + "</h4>"
                button_tag = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + likes + " onclick=update_Like(this.id)>";
                span_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + likes + "</span> </button> <hr>"
                row = name_tag + message_tag + button_tag + span_tag; 
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData();




function logout() {
    localStorage.removeItem("username");
    window.location = "index.html";
}

function send() {
    msg = document.getElementById("msgInput").value;
    firebase.database().ref(roomName).push( {
        name:username,
        message:msg,
        likes:0
    });

   document.getElementById("msgInput").value = "";



}


function update_Like(id) {
    updatedLikes = Number(document.getElementById(id).value) + 1;
    firebase.database().ref(roomname).child(id).update({
        likes:updatedLikes
    });
}