let loader = document.getElementById("loader");
let content = document.getElementById("content");

let bodyC = document.getElementById("body");

function loadContent(){
    setTimeout(displayLoader, 5000);
}
function displayLoader(){
    loader.style.display = "none";
    content.style.display = "block";
    // bodyC.style.background = "rgba(0, 0, 0, 0.8)";
    bodyC.style.backgroundImage = "url(my-photo.jpg)";
   
}