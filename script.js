const footer = document.querySelector('.footer');
let date = new Date();
const p = document.createElement('p');
p.textContent = `Hemant-Dev ©-${date.getFullYear()}`;
footer.appendChild(p);