// Write your code here!
main = document.querySelector('main');
main.remove();

let newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory");
document.body.appendChild(newHeader)

let me = "Jeff Simon"
newHeader.innerHTML = `${me} is the champion`
