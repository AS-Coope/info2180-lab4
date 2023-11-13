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
    if (checkEmptyString(searchField.value.trim())) {
        // if the tests prove true, then submit data
    } else {
        // inform the user that what was entered is invalid/ not found in the 'database/array'
    }
});

function checkEmptyString(enteredData) {
    return enteredData.length === 0 ? true : false;
}


// make request to the server
function makeAjaxRequest() {

    httpRequest.onreadystatechange = form.addEventListener("click", (event) => {
        returnAvengers();
    });
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