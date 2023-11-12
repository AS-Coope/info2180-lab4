document.addEventListener("DOMContentLoaded", (event) => {
    main();
});

const httpRequest = new XMLHttpRequest();
let resourceUrl = "http://localhost/info2180-lab4/superheroes.php";

// make request to the server
function makeAjaxRequest() {

    const searchBtn = document.getElementById("searchBtn");
    httpRequest.onreadystatechange = searchBtn.addEventListener("click", (event) => {
        returnAvengers();
    });
    httpRequest.open("GET", resourceUrl);
    httpRequest.send();
}

// retrieve response from the server
function returnAvengers() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            let response = httpRequest.responseText;
            alert(response);
        } else {
            alert("Error: Could not load Avengers data!");
        }
    }
}

function main() {
    makeAjaxRequest();
}