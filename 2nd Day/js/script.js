let displayDetailsName = document.getElementById('detailName');
let displayDetailsStreet = document.getElementById('detailStreet');
let displayDetailsCity = document.getElementById('detailCity');
let displayDetailsState = document.getElementById('detailState');
let displayDetailsCountry = document.getElementById('detailCountry');
let displayDetailsTelephone = document.getElementById('detailTelephone');
let displayDetailsBirthday = document.getElementById('detailBirthday');

let people = [
    {
        name: 'Adrian John Antonio',
        street: 'Kalidad St.',
        city: 'Taguig',
        state: 'N/A',
        country: 'Philippines',
        telephone: '01234567891',
        birthday: 'November 1, 1990'
    },
    {
        name: 'Rosy Mary',
        street: 'Cattleya St.',
        city: 'Calgary',
        state: 'N/A',
        country: 'Canada',
        telephone: '12345678900',
        birthday: 'June 1, 1995'
    },
    {
        name: 'Kevin Pangilinan',
        street: 'Land of Woods St.',
        city: 'Woodlands',
        state: 'N/A',
        country: 'Singapore',
        telephone: '09876543210',
        birthday: 'April 1, 1999'
    }
]

/*
buttonAdrian.addEventListener("click", changeColorButton);
buttonRosy.addEventListener("click", changeColorButton);
buttonKevin.addEventListener("click", changeColorButton);


function changeColorButton() {
    buttonAdrian.style.backgroundColor = '#C9FFFC';
}
*/

function outputDetailAdrian() {
    displayDetailsName.innerText = 'Name: ' + people[0].name;
    displayDetailsStreet.innerText = 'Street: ' + people[0].street;
    displayDetailsCity.innerText = 'City: ' + people[0].city;
    displayDetailsState.innerText = 'State: ' + people[0].state;
    displayDetailsCountry.innerText = 'Country: ' + people[0].country;
    displayDetailsTelephone.innerText = 'Telephone: ' + people[0].telephone;
    displayDetailsBirthday.innerText = 'Birthday: ' + people[0].birthday;
}

function outputDetailRosy() {
    displayDetailsName.innerText = 'Name: ' + people[1].name;
    displayDetailsStreet.innerText = 'Street: ' + people[1].street;
    displayDetailsCity.innerText = 'City: ' + people[1].city;
    displayDetailsState.innerText = 'State: ' + people[1].state;
    displayDetailsCountry.innerText = 'Country: ' + people[1].country;
    displayDetailsTelephone.innerText = 'Telephone: ' + people[1].telephone;
    displayDetailsBirthday.innerText = 'Birthday: ' + people[1].birthday;
}

function outputDetailKevin() {
    displayDetailsName.innerText = 'Name: ' + people[2].name;
    displayDetailsStreet.innerText = 'Street: ' + people[2].street;
    displayDetailsCity.innerText = 'City: ' + people[2].city;
    displayDetailsState.innerText = 'State: ' + people[2].state;
    displayDetailsCountry.innerText = 'Country: ' + people[2].country;
    displayDetailsTelephone.innerText = 'Telephone: ' + people[2].telephone;
    displayDetailsBirthday.innerText = 'Birthday: ' + people[2].birthday;
}