//q2
const navbar = document.getElementById('navBar');
navbar.setAttribute('id', 'socialNetworkNavigation');
//q3
const list = navbar.querySelector('ul');
const newLi = document.createElement('li');
const logoutText = document.createTextNode('Logout');
newLi.appendChild(logoutText);
list.appendChild(newLi);

//q4
const firstLi = list.firstElementChild;
const lastLi = list.lastElementChild;

console.log('First link text:', firstLi.textContent);
console.log('Last link text:', lastLi.textContent);