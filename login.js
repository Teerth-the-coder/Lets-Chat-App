function login() {
    username = document.getElementById("usernameInput").value;
    localStorage.setItem("username", username);
    window.location = "homeroom.html";
}       
