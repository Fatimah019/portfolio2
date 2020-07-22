let loader = document.getElementById("loader");
let content = document.getElementById("content");

function loadContent(){
    setTimeout(displayLoader, 5000);
}
function displayLoader(){
    loader.style.display = "none";
    content.style.display = "block";
}