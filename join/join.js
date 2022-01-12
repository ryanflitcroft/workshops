import { checkAuth, logout } from '../fetch-utils.js';

const joinForm = document.querySelector('#join-form');

const workshopSelect = document.querySelector('#workshop-select');

console.log(joinForm, workshopSelect);

checkAuth();

const redirectWorkshop = document.getElementById('redirect-workshop');

redirectWorkshop.addEventListener('click', () => {
    window.location.href = '../workshop';
});

window.addEventListener('resize', () => {
    if (window.innerHeight > 565) {
        window.scrollTo(0, 0);
    }
});

window.addEventListener('load', async() => {
    // fetch workshop, render and append to workshopSelect
});