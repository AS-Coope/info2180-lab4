document.addEventListener("DOMContentLoaded", (event) => {
    main();
});

const httpRequest = new XMLHttpRequest();
const resultDiv = document.getElementById("result");
const searchField = document.getElementById("searchField");
const searchBtn = document.getElementById("searchBtn");
const form = document.querySelector("form");
let resourceUrl = "http://localhost/info2180-lab4/superheroes.php";

form.addEventListener("submit", (event) => {
    event.preventDefault() // stop the form from submitting
    if (checkEmptyString(searchField.value.trim()) || checkValidName(searchField.value.trim())) {
        // if the tests prove true, then submit data
        console.log("Working!");
        makeAjaxRequest();
    } else {
        // inform the user that what was entered is invalid/ not found in the 'database/array'
        console.log("Error! Could not get your request")
    }
});

function checkEmptyString(enteredData) {
    return enteredData.length === 0 ? true : false;
}

function checkValidName(enteredName) {
    return /[a-zA-Z\s]+/.test(enteredName);
}


// make request to the server
function makeAjaxRequest() {

    httpRequest.onreadystatechange = returnAvengers(searchField.value.trim());
    httpRequest.open("GET", resourceUrl);
    httpRequest.send();
}

// retrieve response from the server
function returnAvengers(trimmedEntry) {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            let response = httpRequest.responseText;
            resultDiv.innerHTML = response;
        } else {
            alert("Error: Could not load Avengers data!");
        }
    }
}

function main() {
    makeAjaxRequest();
}