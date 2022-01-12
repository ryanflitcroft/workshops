import { checkAuth, logout } from '../fetch-utils.js';

const joinForm = document.querySelector('#join-form');

const workshopSelect = document.querySelector('#workshop-select');

console.log(joinForm, workshopSelect);

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