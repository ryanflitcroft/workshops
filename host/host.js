import { checkAuth } from '../fetch-utils.js';

const hostForm = document.querySelector('#host-form');

console.log(hostForm);

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