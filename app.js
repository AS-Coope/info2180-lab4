document.addEventListener("DOMContentLoaded", (event) => {
    main();
});

function makeAjaxRequest() {
    const httpRequest = new XMLHttpRequest();
    let resourceUrl = "http://localhost/info2180-lab4/superheroes.php";
    httpRequest.onreadystatechange = console.log("Initial Test");
    httpRequest.open("GET", resourceUrl);
    httpRequest.send();
}
function main() {
    makeAjaxRequest();
}