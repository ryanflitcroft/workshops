import { checkAuth, logout } from '../fetch-utils.js';

const workshopSection = document.querySelector('#workshop-section');

const joinButton = document.querySelector('#join-button');

const hostButton = document.querySelector('#host-button');

console.log(workshopSection, joinButton, hostButton);

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
