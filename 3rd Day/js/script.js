let name = document.getElementById('name');
let password = document.getElementById('password');
let homepage = document.getElementById('homepage');
let message = document.getElementById('message');

if (homepage) {
    homepage.addEventListener('click', () => {
        if (name.value != null && password.value != null) {
            homepage.onclick = function () {
                location.href = "home.html";
            }

            if (name.value === '' || name.value === null) {
                username.style.borderColor = 'red';
            }

            if (password.value === '' || password.value === null) {
                password.style.borderColor = 'red';
            }
        }
    })
}

//First API
let urlCountryCode = "http://ip-api.com/json/?fields=query,countryCode";

//Second API

let urlTranslate = "http://fourtonfish.com/hellosalut/?lang=&ip=";
fetch(urlCountryCode).then(function (response) {
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(response);
    }
}).then(function (data) {

    // Store the post data to a variable
    post = data;
    let getCountryCode = post.countryCode
    let getIPaddress = post.query
    // Get the country code and the ip address of the user for another API
    urlTranslate = "http://fourtonfish.com/hellosalut/?lang=" + getCountryCode + "&ip=" + getIPaddress
    return fetch(urlTranslate);

}).then(function (response) {
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(response);
    }
}).then(function (userData) {
    let hello = userData.hello;
    message.innerText = hello + ' user' + ', you have successfully login!';
}).catch(function (error) {
    console.log(error);
});

logout = () => {
    let message2 = document.getElementById('message2');
    message.innerText = '';
    message2.innerText = 'Have a great day! User'
}