var input = document.getElementById("button")
console.log(input)
let output = document.getElementById("outputArea");

input.addEventListener("click", (ev) => {
    ev.preventDefault();
    output.style.display = "inline";



})

var box = document.getElementById("feedback");
box.addEventListener("click", (ev) => {
    output.style.display = "none";
    box.value = "";


})