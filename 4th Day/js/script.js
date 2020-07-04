let userID = document.getElementById('userID');
let password = document.getElementById('password');

login = () => {
    if (userID.value == ' ') {
        alert('User ID has spaces');
        userID.style.backgroundColor = "lightyellow";
        userID.style.borderColor = "#FFABAB";
    }
    if (password.value == ' ') {
        alert('password has spaces');
        password.style.backgroundColor = "lightyellow";
        password.style.borderColor = "#FFABAB";
    }


    if (userID.value != ' ' && userID.value != "testuser") {
        alert("User ID doesn't match");
        userID.style.backgroundColor = "#FFABAB";
        userID.style.borderColor = "#ABB4FF";
    }
    if (password.value != ' ' && password.value != "mypassword") {
        alert("Password doesn't match");
        password.style.backgroundColor = "#FFABAB";
        password.style.borderColor = "#ABB4FF";
    }

}

cancel = () => {
    userID.value = ''
    password.value = ''
    userID.style.backgroundColor = "white";
    password.style.backgroundColor = "white";
}