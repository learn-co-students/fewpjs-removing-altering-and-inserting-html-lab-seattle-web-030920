// Write your code here!
const main = document.querySelector('main#main');
main.remove();

const newHeader = document.createElement('h1')
newHeader.id = 'victory';
document.body.appendChild(newHeader);
newHeader.innerHTML = 'Valerie is the champion'