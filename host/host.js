import { checkAuth, logout } from '../fetch-utils.js';

const hostForm = document.querySelector('#host-form');

console.log(hostForm);

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('resize', () => {
    if (window.innerHeight > 565) {
        window.scrollTo(0, 0);
    }
});