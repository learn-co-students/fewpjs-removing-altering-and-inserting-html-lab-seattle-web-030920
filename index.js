// Write your code here!

let body = document.querySelector("body");
body.removeChild(body.querySelector('main#main'));

let newHeader = document.createElement("h1")
newHeader.id = "victory";
document.body.appendChild(newHeader);
newHeader.innerHTML = "Christine is the champion";
